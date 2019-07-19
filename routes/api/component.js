const router = require("express").Router();
const componentController = require("../../controllers/componentController");

// Matches with "/api/component"
router.route("/")
  .get(componentController.findAll)


router
  .route("/componentid")
  .post(componentController.componentId)

// Matches with "/api/component/:id"
router
  .route("/:id")
  .put(componentController.update)
  .delete(componentController.remove);

module.exports = router;