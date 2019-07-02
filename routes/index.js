const path = require("path");
const router = require("express").Router();
const componentApiRoutes = require("./api/componentApi");
const elementApiRoutes = require("./api/elementApi");
const remedyApiRoutes = require("./api/remedyApi");
const userApiRoutes = require("./api/userApi");


//API routes!!!
router.use("/componentApi", componentApiRoutes);
router.use("/elementApi", elementApiRoutes);
router.use("/remedyApi", remedyApiRoutes);
router.use("/userApi", userApiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
