const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use routes
app.use(routes);

// Connect to the DB here
// Eg. Mongoose or Sequelize/TypeORM (Associated files should be in models folder ./models)

// Init Server and listen
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
