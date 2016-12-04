var mongoose = require('mongoose');


var schema = mongoose.Schema({

    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String
    },
    Status: {
        type: String
    },
    RegistrationDate: {
        type: Date,
        default: Date.now
    },
    Cost: {
        type: String
    },
    Categories: {  
        type: [String]    
    },
    Team: [ 
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User' 
        }
    ]


});

mongoose.model('Project', schema);