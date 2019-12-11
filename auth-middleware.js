let jwt = require("jsonwebtoken");

function extractTokenFromCookie(cookies) {
  // cookies.split(";").split
}

// Middleware function to check the json web token of user
let checkToken = (req, res, next) => {
  let result;

  try {
    // Grab cookie headers from request
    let token = req.headers.cookie + ";";
    token = token.split(";");
    console.log("Checking token: ", token);

    // Iterate through cookie items to find match
    for (let i = 0; i < token.length; i++) {
      console.log("token2i is:", token[i]);
      // If the token value exists (not undefined)
      if (token[i] && token[i].startsWith("authorization")) {
        // Remove bearer text from string
        result = token[i].slice(14, token[i].length);
        console.log("After slice: ", result);
      }
    }
    // If error
  } catch (err) {
    console.error("Error encountered, proceeding: ", err);
  }

  // If by chance the token starts with Bearer
  // if (token && token.startsWith("Bearer ")) {
  //   // Remove bearer text from string
  //   token = token.slice(7, token.length);
  // }

  // Pertform authentication check if token present
  if (result) {
    jwt.verify(result, process.env.AUTH_SECRET, (err, decoded) => {
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
