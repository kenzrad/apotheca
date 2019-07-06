const router = require("express").Router();
const componentController = require("../../controllers/apiController");

// Matches with "/api/component"
router.route("/")
  .get(componentController.findAll)
  .post(componentController.create);

// Matches with "/api/component/:id"
router
  .route("/:id")
  .get(componentController.findById)
  .put(componentController.update)
  .delete(componentController.remove);

module.exports = router;