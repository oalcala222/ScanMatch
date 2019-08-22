const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cageSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    CageSID: {
        type: String,
        required: true
    },
    CageTag: String,
    Mouseline: String,
    CreateWean: Date,
    MatingSetup: Date,
    Protocol: String,
    pI: String,
    Owner: String,
    PhoneNumber: String,
    MatingSID: String
});

var Cage = mongoose.model("Cage", cageSchema);

module.exports = Cage;