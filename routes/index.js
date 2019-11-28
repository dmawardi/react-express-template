const path = require("path");
const router = require("express").Router();

// API Routes
router.get("/api", function(req, res) {
  res.send("You are hitting the API request endpoint (Method: GET)");
});

// If no API routes are hit, send the React app
router.use("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
