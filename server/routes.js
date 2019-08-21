
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./routes");

// API Routes
router.use("/routes", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

module.exports = router;

module.exports = function(app){
    // Our model controllers (rather than routes)
    const users = require('./routes/users');
    const trips = require('./routes/trips');

    const authCheckMiddleware = require('./config/middleware/authCheck');
    app.use('/apis/trips', authCheckMiddleware);
    app.use('/apis/pricing', authCheckMiddleware);

    app.use('/apis/users', users);
    app.use('/apis/trips', trips);
    //other routes..
}

