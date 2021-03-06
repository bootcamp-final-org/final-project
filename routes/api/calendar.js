const router = require("express").Router();
const controller = require("../../controllers/calendarController");

// Matches with "/api/calendar"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/calendar/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

// Matches with "/api/calendar/:id"
router
.route("/match/:id")
.get(controller.match)

module.exports = router;