// Dependencies
// ============
const express = require("express");
const path = require('path');
const logger = require('morgan');
const mongoose = require("mongoose");
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