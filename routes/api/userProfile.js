const router = require("express").Router();
const userController = require("../../controllers/userProfileController");

// Matches with "/api/userProfile"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/userProfile/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;