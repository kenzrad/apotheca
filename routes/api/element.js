const router = require("express").Router();
const elementController = require("../../controllers/elementController");

console.log("I am in the element api folder")

// Matches with "/api/element"
router.route("/")
  .get(elementController.findAll)
  .post(elementController.create);

router
  .route("/userelements")
  .post(elementController.restrictions)

// Matches with "/api/element/:id"
router
  .route("/:id")
  .get(elementController.findById)
  .put(elementController.update)
  .delete(elementController.remove);

module.exports = router;