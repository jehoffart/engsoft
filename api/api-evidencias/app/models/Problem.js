 var mongoose = require('mongoose');

var schema = mongoose.Schema({

        Name: {
            type: String,
            required: true
        },
        Description: {
            type: String
        },
        Ask: {
            type: [String] 
        },
        MaxCost: {
            type: Number
        },
        Type: {
            type: String
        },
        Registration: [
            {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Project',

                respostas: {
                    type: [String] 
                }
            }
        ]
         
    


});

mongoose.model('Problem', schema);