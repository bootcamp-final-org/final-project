const router = require("express").Router();
const students = require("./students");
const tutor = require("./tutor");
const calendar = require("./calendar");

// User routes
router.use("/students", students);
router.use("/tutor", tutor);
router.use("/calendar", calendar);

module.exports = router;
