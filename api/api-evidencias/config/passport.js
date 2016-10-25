var JwtStrategy = require('passport-jwt').Strategy;

//var path = require('path');
//var model = require(path.resolve('./app/models/User.js'));
//var a = require('./app/models/user.js')
var model = require('mongoose').model('User');
var config = require('../config/config'); // get db config file


//var User = require('C:/Users/Guilherme/Desktop/engsoft/api/api-evidencias/app/models/User');

module.exports = function(passport) {
  var opts = {};
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    model.findOne({id: jwt_payload.id}, function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
          }
      });
  }));
};