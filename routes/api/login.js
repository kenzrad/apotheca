const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/login"
router.route("/")
  .get(loginController.findAll)
  .post(loginController.create)


router.route("/login")
  .post(loginController.login)

// Matches with "/api/login/:id"
router
  .route("/:id")
  .get(loginController.findById)
  .put(loginController.update)
  .delete(loginController.remove);

module.exports = router;