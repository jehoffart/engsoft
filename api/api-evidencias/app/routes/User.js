
module.exports  = function(app) {
  var api = app.api.User;
    var mongoose = require('mongoose');
  
    var config = require('../../config/config');
    var model = mongoose.model('User');
    var passport    = require('passport');
    var jwt  = require('jwt-simple');



    app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

    app.route('/user')
    .get(passport.authenticate('jwt', { session: false}), api.get)
    .post(api.post);

    app.route('/user/:id')
    .get(passport.authenticate('jwt', { session: false}),api.getById)
    .delete(passport.authenticate('jwt', { session: false}),api.delete)
    .put(passport.authenticate('jwt', { session: false}),api.put);

     app.route('/auth')
    .post(api.auth);



/*

///PARA TESTES FUTUROS
app.get('/memberinfo', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    var decoded = jwt.decode(token, config.secret);
    model.findOne({
      Login: decoded.Login
    }, function(err, user) {
        if (err) throw err;
 
        if (!user) {
          return res.status(403).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
          res.json({success: true, msg: 'Welcome in the member area ' + user.Login + '!'});
        }
    });
  } else {
    return res.status(403).send({success: false, msg: 'No token provided.'});
  }
});

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
 


*/






};
