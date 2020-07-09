const router = require("express").Router();
const controller = require("../../controllers/studentsController");

// Matches with "/api/students"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/students/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);

module.exports = router;
