const router = require("express").Router();
const remedyController = require("../../controllers/apiController");

// Matches with "/api/remedy"
router.route("/")
  .get(remedyController.findAll)
  .post(remedyController.create);

// Matches with "/api/remedy/:id"
router
  .route("/:id")
  .get(remedyController.findById)
  .put(remedyController.update)
  .delete(remedyController.remove);

module.exports = router;