
module.exports  = function(app) {

    var api = app.api.Problem;
 var mongoose = require('mongoose');

    var config = require('../../config/config');
    var model = mongoose.model('User');
    var passport    = require('passport');
    var jwt  = require('jwt-simple');



    app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "OPTION, GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
    });
    app.route('/problem')
    .get(api.get)
    .post(passport.authenticate('jwt', { session: false}),api.post);

    app.route('/problem/:id')
    .get(api.getById)
    .delete(passport.authenticate('jwt', { session: false}),api.delete)
    .put(passport.authenticate('jwt', { session: false}),api.put);

      
    app.route('/problem/newProject/:id')
    .post(passport.authenticate('jwt', { session: false}),api.newProject);
        
    app.route('/problem/findByProject/:id')
    .post(passport.authenticate('jwt', { session: false}),api.findByProject);
        

};
