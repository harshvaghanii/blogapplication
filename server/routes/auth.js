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

router.get("/secret", requireSignin, (req, res) => {
    res.json({
        message: "You have access to secret route!",
    });
});

module.exports = router;
