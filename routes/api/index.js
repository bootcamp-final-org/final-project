const router = require("express").Router();
const students = require("./students");
const tutors = require("./tutors");
const calendar = require("./calendar");

// User routes
router.use("/students", students);
router.use("/tutors", tutors);
router.use("/calendar", calendar);

module.exports = router;
