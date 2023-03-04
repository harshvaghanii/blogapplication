const router = require("express").Router();
const {
    requireSignin,
    authMiddleware,
    adminMiddleware,
} = require("../controllers/auth");

const { read } = require("../controllers/user");

router.get("/profile", requireSignin, authMiddleware, read);

module.exports = router;
