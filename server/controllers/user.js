const User = require("../models/user");

exports.read = (req, res) => {
    const { hashed_password, salt, resetPasswordLink, ...others } = req.profile;
    return res.json({ ...others });
};
