const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/login"
router.route("/")
  .get(loginController.findAll)
// .post(loginController.create)

//Matches with "/api/login/login"
router.route("/login")
  .post(loginController.login);

router.route("/username")
  .post(loginController.userName);

router.route("/create")
  .put(loginController.newUser);
// Matches with "/api/login/:id"
router
  .route("/:id")
  .get(loginController.findById)
// .put(loginController.update)
// .delete(loginController.remove);



module.exports = router;