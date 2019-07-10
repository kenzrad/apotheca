const router = require("express").Router();
const componentRoutes = require("./component");
const elementRoutes = require("./element");
const remedyRoutes = require("./remedy");
const userRoutes = require("./user");
const userProfileRoutes = require("./userProfile")

// Component, element, remedy, user routes

router.use("/component", componentRoutes);
router.use("/element", elementRoutes);
router.use("/remedy", remedyRoutes);
router.use("/user", userRoutes);
router.use("/userProfile", userProfileRoutes)


module.exports = router;