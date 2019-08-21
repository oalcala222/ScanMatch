const router = require("express").Router();
const users = require('./routes/users');


app.use('/apis/users', users);

module.exports = router;