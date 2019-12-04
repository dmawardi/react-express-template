let jwt = require("jsonwebtoken");

// Middleware function to check the json web token of user
let checkToken = (req, res, next) => {
  // Grab express headers from request
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  console.log("Checking token: ", token);
  console.log(req.headers);

  if (token && token.startsWith("Bearer ")) {
    // Remove bearer text from string
    token = token.slice(7, token.length);
  }

  // Pertform authentication check if token present
  if (token) {
    jwt.verify(token, process.env.AUTH_SECRET, (err, decoded) => {
      // If an error occurred
      if (err) {
        // Return fail response
        return res.json({
          success: false,
          message: "Token is not valid"
        });
        // Else, if no error, grab decoded token
      } else {
        //   Grab decoded token and apply details to request when proceeding
        req.decoded = decoded;
        // Allow user to proceed
        next();
      }
    });
    // Else if no token detected
  } else {
    // Return that no auth token detected
    return res.json({
      success: false,
      message: "Auth token is not supplied"
    });
  }
};

module.exports = {
  checkToken: checkToken
};
