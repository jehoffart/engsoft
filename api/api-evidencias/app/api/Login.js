var mongoose = require('mongoose');
var util = require('util.js');
var jwt  = require('jwt-simple');
var api = {}
var model = mongoose.model('Login');
var config = require('../../config/config');

api.get = function(req, res) {  
	res = util.setResponse(res);
	model.find({})
	.then(function(logins){
		res.json(logins);
	}, function(error){
		console.log(error);
		res.status(500).json(error);
	});  
};

api.getById = function(req, res) {
    res = util.setResponse(res);
	model.findById(req.params.id)
    .then(function(login){
		if(!login) throw Error('Login não encontrado')
			res.json(login);      
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
    var login = req.body;

    model.create(login)
    .then(function(login){
        res.json(login);
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })
}

api.put = function(req, res){
	res = util.setResponse(res);
	model.findByIdAndUpdate(req.params.id, req.body)
	.then(function(){
		res.json(login);
	}, function(error){
		console.log(error);
        res.status(500).json(error);
    })
}

api.auth = function(req, res){

//console.log(req.body);
  model.findOne({
    Login: req.body.Login
  }, function(err, login) {
    if (err) throw err;
 
    if (!login) {
      res.send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      login.comparePassword(req.body.Password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.encode(login, config.secret);
          // return the information including token as JSON
          //console.log(login);
          res.json({success: true, token: 'JWT ' + token, type: login.Type, loginId: login.ReferenceId});
        } else {
          res.send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });


}

api.findByUser = function(req, res) {
   //console.log(req.params.id);
    model.find({"ReferenceId": req.params.id })
    .then(function(projects){
      if(!projects) throw Error('Projeto não encontrado')
        res.json(projects);      
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })        
};


module.exports = api;