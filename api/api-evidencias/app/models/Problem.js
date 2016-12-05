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
            type: String
            
        },
        Categories: {
            type: [String]
        },
        EnterpriseId:
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Enterprise'
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