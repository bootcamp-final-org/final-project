const router = require("express").Router();
const controller = require("../../controllers/tutorsController");

// Matches with "/api/tutors"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/tutors/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

router
  .route("/:id/remove-availability")
  .put(controller.removeAvailability);


module.exports = router;