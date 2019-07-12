const router = require("express").Router();
const userController = require("../../controllers/apiController");

// Matches with "/api/user"
router.route("/")
    .get(userController.findAll)
    .post(userController.create)


// Matches with "/api/login/:username"
router
    .route("/")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);

module.exports = router;