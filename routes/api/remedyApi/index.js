const router = require("express").Router();
const remedyRoutes = require("./remedy");

// Remedy routes
router.use("/remedy", remedyRoutes);

module.exports = router;