let jwt = require("jsonwebtoken");

class AuthHandlerGenerator {
  // User login handler
  login(req, res) {
    // Grab username and password from the body of the request
    console.log("Incoming request: ", req.body);

    let username = req.body.email;
    let password = req.body.password;
    console.log("Attempted login by: " + username);

    // Fetch user from the DB
    let mockedUsername = "admin@gmail.com";
    let mockedPassword = "password";

    // If username and password are present in request body
    if (username && password) {
      // If the username and password match the DB values
      if (username === mockedUsername && password === mockedPassword) {
        console.log(username + " has logged in");
        let token = jwt.sign(
          { username: username },
          process.env.AUTH_SECRET, //Use secret to encrypt
          {
            expiresIn: "24h" //Token expires in 24 hours
          }
        );

        // Return the JWT for future API calls
        res.json({
          success: true,
          message: "Authentication successful",
          token: token
        });
        // Else, if the typed username/password doesn't match
      } else {
        res.status(403).send({
          success: false,
          message: "Incorrect username or password"
        });
      }
      //   Else, if no username/password detected in the request body
    } else {
      res.status(400).send({
        success: false,
        message: "Authentication failed!  Please check the request"
      });
    }
  }

  //   Index function to send users to index page?
  index(req, res) {
    // User details are contained within here
    console.log("decoded user reg: ", req.decoded);
    // Send success to user
    res.json({
      success: true,
      message: "Index page"
    });
  }
}

module.exports = AuthHandlerGenerator;
