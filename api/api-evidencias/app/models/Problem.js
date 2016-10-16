 var mongoose = require('mongoose');

var schema = mongoose.Schema({

        Name: {
            type: String,
            required: true
        },
        Description: {
            type: String
        },
        Questions: {
            type: [String] 
        },
        MaxCost: {
            type: Number
        },
        Categories: {
            type: [String]
        },
        Registrations: [
            {
                ProjectId: 
                {
                    type: mongoose.Schema.Types.ObjectId, 
                    ref: 'Project'
                },

                Answers: {
                    type: [String] 
                }
            }
        ]
         
    


});

mongoose.model('Problem', schema);