module.exports = function(app){
    // Our model controllers (rather than routes)
    const xlupload = require('./routes/xldata');
    const scanupload = require('./routes/scana');

    app.use('/uploadxl', xlupload);
    app.use('/scanneddata', scanupload);
    //other routes..
}

