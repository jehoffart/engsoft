var mongoose = require('mongoose');
var util = require('util.js');
var jwt  = require('jwt-simple');
var api = {}
var model = mongoose.model('User');
var config = require('../../config/config');


api.get = function(req, res) {  
	res = util.setResponse(res);
	model.find({})
	.then(function(users){
		res.json(users);
	}, function(error){
		console.log(error);
		res.status(500).json(error);
	});  
};

api.getById = function(req, res) {
    res = util.setResponse(res);
	model.findById(req.params.id)
    .then(function(user){
      if(!user) throw Error('Usuário não encontrado')
        res.json(user);      
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })        
};

api.delete = function(req, res) {
    res = util.setResponse(res);
	model.remove({_id : req.params.id})
    .then(function(){
        res.sendStatus(204);
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })       
};

api.post = function(req, res){
    res = util.setResponse(res);
	//var user = req.body;
    var user = new model({
      Name:     req.body.Name,
      Age:      req.body.Age,
      Email:    req.body.Email,
      City:     req.body.City,
      State:    req.body.State,
      Street:   req.body.Street,
      About:    req.body.About,
      Login:    req.body.Login,
      Password: req.body.Password,
      RegistrationDate: req.body.RegistrationDate

    });

    user.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });


   /* model.create(user)
    .then(function(user){
        res.json(user);
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })*/
}

api.put = function(req, res){
    res = util.setResponse(res);
	model.findByIdAndUpdate(req.params.id, req.body)
    .then(function(){
        res.json(user);
    }, function(error){
       console.log(error);
       res.status(500).json(error);
    })
}




api.auth = function(req, res){

//console.log(req.body);
  model.findOne({
    Login: req.body.Login
  }, function(err, user) {
    if (err) throw err;
 
    if (!user) {
      res.send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.Password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.encode(user, config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });


}





module.exports = api;