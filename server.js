
// Require the dependencies
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

// Set up the ports
var PORT = process.env.PORT || 3000;

// Instantiate the Express App
var app = express();

// Require the routes
var routes = require("./routes");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect Handlebars to the Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// The every request go through the route middleware
app.use(routes);

// Use the deployed database orelse use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://rajuc:RajuC1220@ds211368.mlab.com:11368/heroku_0swwf63f";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
