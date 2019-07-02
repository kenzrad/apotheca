const router = require("express").Router();
const componentRoutes = require("./component");

// Component routes
router.use("/component", componentRoutes);

module.exports = router;