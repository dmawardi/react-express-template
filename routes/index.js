const path = require("path");
const middleware = require("../auth-middleware");
const router = require("express").Router();
const AuthHandlerGenerator = require("../AuthenticationHandler");
// Init new handler for
let handler = new AuthHandlerGenerator();

// API Routes
router.get("/api", function(req, res) {
  res.send("You are hitting the API request endpoint (Method: GET)");
});

// Authentication routes
// Login
router.post("/login", handler.login);
// If user has token, send to index
router.get("/", middleware.checkToken, handler.index);

// If no API routes are hit, send the React app
router.use("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
