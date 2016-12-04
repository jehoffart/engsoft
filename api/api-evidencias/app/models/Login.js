var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


var schema = mongoose.Schema({
    Login: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
    },
    Type: {
        type: String,
        required: true,
    },
    ReferenceId: {
            type: mongoose.Schema.Types.ObjectId, 
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
            bcrypt.hash(user.Password, salt,null, function (err, hash) {
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
 

module.exports = mongoose.model('Login', schema);