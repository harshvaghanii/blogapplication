const router = require("express").Router();
const {
    signupController,
    loginController,
    logoutController,
    requireSignin,
} = require("../controllers/auth");

// Importing Validators
const { runValidation } = require("../validators/index");
const {
    userSignupValidator,
    userLoginValidator,
} = require("../validators/auth");

router.post("/signup", userSignupValidator, runValidation, signupController);

router.post("/login", userLoginValidator, runValidation, loginController);

router.get("/logout", logoutController);



// Testing purpose!

// router.get("/secret", requireSignin, (req, res) => {
//     console.log(req.user);
//     res.json({ user: req.auth });
// });

module.exports = router;
