var mongoose = require('mongoose');
var util = require('util.js');
var jwt  = require('jwt-simple');
var api = {}
var model = mongoose.model('User');
var modelLogin = mongoose.model('Login');
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
    //console.log(req)
   // var id = jwt.decode(req.params.id, config.secret);
   // console.log(id);
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

    var user = new model({
      Name:     req.body.Name,
      Age:      req.body.Age,
      Email:    req.body.Email,
      City:     req.body.City,
      State:    req.body.State,
      Street:   req.body.Street,
      About:    req.body.About,
      RegistrationDate: req.body.RegistrationDate
    });

    model.create(user)
    .then(function(user){
       // res.json(user);
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })
 
   var login = new modelLogin({
      Login: req.body.Login,
      Password: req.body.Password,
      Type: "user",
      ReferenceId: user._id
    });


    login.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json(user);
    });



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




module.exports = api;