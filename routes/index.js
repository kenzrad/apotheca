const path = require("path");
const router = require("express").Router();
const ApiRoutes = require("./api")



//API routes!!!
router.use("/api", ApiRoutes);


// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
  console.log("no APIs")
});

module.exports = router;
