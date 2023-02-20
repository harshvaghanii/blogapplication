const router = require("express").Router();
const { signupController } = require("../controllers/auth");

// Importing Validators
const { runValidation } = require("../validators/index");
const { userSignupValidator } = require("../validators/auth");
router.post("/signup", userSignupValidator, runValidation, signupController);

module.exports = router;
