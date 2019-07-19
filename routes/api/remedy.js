const router = require("express").Router();
const remedyController = require("../../controllers/remedyController");

// Matches with "/api/remedy"
router.route("/")
  .get(remedyController.findAll)
  .post(remedyController.create);

router
  .route("/remedyid")
  .post(remedyController.remedyId);

// Matches with "/api/remedy/:id"
router
  .route("/:id")
  .put(remedyController.update)
  .delete(remedyController.remove);

module.exports = router;