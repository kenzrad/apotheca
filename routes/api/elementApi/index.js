const router = require("express").Router();
const elementRoutes = require("./element");

// Element routes
router.use("/element", elementRoutes);

module.exports = router;