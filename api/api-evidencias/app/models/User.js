var mongoose = require('mongoose');


var schema = mongoose.Schema({

    Name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    Street: {
        type: String,
        required: true
    },
    About: {
        type: String
    },
    RegistrationDate: {
        type: Date,
        default: Date.now
    }
});





module.exports = mongoose.model('User', schema);