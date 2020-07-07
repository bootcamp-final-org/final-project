const router = require("express").Router();
const users = require("./users");

// User routes
router.use("/users", users);

module.exports = router;
