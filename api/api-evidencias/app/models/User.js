var mongoose = require('mongoose');
var bcrypt = require('bcrypt');


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


schema.pre('save', function (next) {
    var user = this;
   // console.log(user);
    if (this.isModified('Password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.Password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.Password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});
 
schema.methods.comparePassword = function (passw, cb) {
  //  console.log(passw);
 //   console.log(this.Password);

    bcrypt.compare(passw, this.Password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};
 


module.exports = mongoose.model('User', schema);