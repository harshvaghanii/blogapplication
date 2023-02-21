const { check } = require("express-validator");
exports.userSignupValidator = [
    check("name").not().isEmpty().withMessage("Name is required!"),
    check("email").isEmail().withMessage("Enter a valid email address!"),
    check("password")
        .isLength({ min: 6 })
        .withMessage("Password must be atleast 6 characters long!"),
];

exports.userLoginValidator = [
    check("email")
        .not()
        .isEmpty()
        .withMessage("Email is required!")
        .isEmail()
        .withMessage("Enter a valid email address!"),
    check("password", "Please enter your password!").not().isEmpty(),
];
