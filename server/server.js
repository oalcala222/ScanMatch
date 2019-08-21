// Dependencies
// ============
const express = require("express");
const path = require('path');
const logger = require('morgan');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const passport = require("./config/passport");
const session  = require('express-session'); 
const config	= require("./config/extra-config");
const PORT = process.env.PORT || 3001;


// Enable CORS from client-side
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

//app.use(favicon(__dirname + '/public/favicon.ico'));
const authCheck = require('./config/middleware/attachAuthenticationStatus'); 
=======
const PORT = process.env.PORT || 3001;

// Express settings
// ================
// instantiate our app
const app = express();


// Configure body parsing for AJAX requests
// ========================================
app.use(logger('dev'));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);


// Add routes, both API and view
// =============================
const routes = require("./routes");
app.use(routes);
//require('./routes')(app);

// Connect to the Mongo DB
// =======================
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/scanmatch",{useCreateIndex: true, useNewUrlParser: true}
);
// Get the default connection
// ==========================
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
// ========================================================================
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Start the API server
// ====================
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);

module.exports = app;