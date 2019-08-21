module.exports = function(app){
    // Our model controllers (rather than routes)
    const users = require('./routes/users');
    const xlupload = require('./routes/xldata');
    const scanupload = require('./routes/scana');

    app.use('/apis/users', users);
    app.use('/uploadxl', xlupload);
    app.use('/scanneddata', scanupload);
    //other routes..
}


module.exports = router;

