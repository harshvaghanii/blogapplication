const User = require("../models/user");
const shortId = require("shortid");
const jwt = require("jsonwebtoken");
const { expressjwt: expressJwt } = require("express-jwt");


exports.signupController = (req, res) => {
    const { name, email, password } = req.body;
    User.findOne({ email }).exec((err, user) => {
        if (user) {
            return res
                .status(400)
                .json({ error: "Sorry, the user already exists!" });
        }

        let username = shortId.generate();
        let profile = `${process.env.CLIENT_URL}/profile/${username}`;

        let newUser = new User({ name, email, password, profile, username });
        newUser.save((err, success) => {
            if (err) {
                return res.status(400).json({
                    error: err,
                });
            }
            res.json({
                message:
                    "Your user has been created! Please login to continue!",
            });
        });
    });
};

exports.loginController = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email }).exec((err, user) => {
        if (err || !user) {
            res.status(400).json({
                error: "User does not exist! Please signup first!",
            });
        }

        if (!user.authenticate(password)) {
            res.status(400).json({
                error: "Please enter valid credentials!",
            });
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY, {
            expiresIn: "1d",
        });

        res.cookie("token", token, { expiresIn: "1d" });

        const { _id, username, name, email, role } = user._doc;

        res.status(200).json({
            message: "Logged in successfully!",
            user: { _id, username, name, email, role },
            token,
        });
    });
};

exports.logoutController = (req, res) => {
    res.clearCookie("token");
    res.json({
        message: "Logged out successfully!",
    });
};

exports.requireSignin = expressJwt({
    secret: process.env.JWT_KEY,
    algorithms: ["HS256"],
    userProperty: "auth",
});

exports.authMiddleware = (req, res, next) => {
    const authUserId = req.auth._id;
    User.findById({ _id: authUserId }).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found!",
            });
        }

        req.profile = user._doc;
        next();
    });
};

exports.adminMiddleware = (req, res, next) => {
    const adminUserId = req.auth._id;
    User.findById({ _id: adminUserId }).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found!",
            });
        }
        if (user.role != 1) {
            return res.status(400).json({
                error: "Admin resource. Access denied!!",
            });
        }

        req.profile = user._doc;
        next();
    });
};
