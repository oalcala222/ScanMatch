'use strict';

// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var uploadSchema = mongoose.Schema({

    Cage_SID: {
        type: Number,
        min: [1, 'Too few characters'],
        max: 50,
        required: [true, 'please make sure your excel sheet has this are completed.']
    },
    Cage_Tag: {
        type: String,
        required: [false]
    },
    Cage_Type: {
        type: String,
        required: [false]
    },
    num_of_Mice: {
        type: Number,
        min: [1, 'Too few characters'],
        max: 50,
        required: [true, 'please make sure your excel sheet has this are completed.']
    },
    Disposition: {
        type: String,
        required: [false]
    },
    Mouseline: {
        type: String,
        required: [true]
    },
    Protocol: {
        type: String,
        min: [1, 'Too few characters'],
        max: 50,
        required: [true, 'please make sure your excel sheet has this are completed.']
    },
    Mice_Tags: {
        type: String,
        required: [false]
    },
    Genotypes: {
        type: String,
        required: [false]
    },
    Comment: {
        type: String,
        required: [false]
    },
    Set_up_Date: {
        type: Date,
        required: [false]
    },
    Mouse_Owner: {
        type: String,
        min: [1, 'Too few characters'],
        max: 50,
        required: [true, 'please make sure your excel sheet has this are completed.']
    },

});

// create the model for users and expose it to our app
module.exports = mongoose.model('Upload', uploadSchema);