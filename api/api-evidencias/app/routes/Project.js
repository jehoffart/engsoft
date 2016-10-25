
module.exports  = function(app) {

    var api = app.api.Project;
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
    app.route('/project')
    .get(passport.authenticate('jwt', { session: false}),api.get)
    .post(passport.authenticate('jwt', { session: false}),api.post); 

    app.route('/project/:id')
    .get(passport.authenticate('jwt', { session: false}),api.getById)
    .delete(passport.authenticate('jwt', { session: false}),api.delete)
    .put(passport.authenticate('jwt', { session: false}),api.put);
        
  
};