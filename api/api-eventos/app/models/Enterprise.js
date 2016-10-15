var mongoose = require('mongoose');

var schema = mongoose.Schema({

    CNPJ : {
        type: String,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true
    },
    Login: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true,
    },
    Description: {
        type: String
    },
    RegistrationDate: {
        type: Date,
        default: Date.now
    },
    Category: {  
        type: [String]    
    },
    Website: {
        type: String
    },
    Problem:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Problem' }]


});

mongoose.model('Enterprise', schema);