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
    Login: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true,
    },
    RegistrationDate: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('User', schema);