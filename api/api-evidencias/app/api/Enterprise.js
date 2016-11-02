var mongoose = require('mongoose');
var util = require('util.js');
var jwt  = require('jwt-simple');
var api = {}
var model = mongoose.model('Enterprise');
var modelLogin = mongoose.model('Login');
var config = require('../../config/config');

api.get = function(req, res) {  
	res = util.setResponse(res);
	model.find({})
	.then(function(enterprises){
		res.json(enterprises);
	}, function(error){
		console.log(error);
		res.status(500).json(error);
	});  
};

api.getById = function(req, res) {

    res = util.setResponse(res);
	model.findById(req.params.id)
    .then(function(enterprise){
      if(!enterprise) throw Error('Empresa não encontrado')
        res.json(enterprise);      
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

  var enterprise = new model({
      CNPJ:         req.body.CNPJ,
      Name:         req.body.Name,
      Description:  req.body.Description,
      RegistrationDate: req.body.RegistrationDate,
      Categories:   req.body.Categories,
      Website:      req.body.Website,
      Problems:     req.body.Problems
    });



    model.create(enterprise)
    .then(function(enterprise){
      //  res.json(enterprise);
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })

   var login = new modelLogin({
      Login: req.body.Login,
      Password: req.body.Password,
      Type: "enterprise",
      ReferenceId: enterprise._id
    });


    login.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json(enterprise);
    });


}

api.put = function(req, res){
	res = util.setResponse(res);
	model.findByIdAndUpdate(req.params.id, req.body)
	.then(function(){
		res.json(enterprise);
	}, function(error){
		console.log(error);
		res.status(500).json(error);
	})
}

api.newProblem = function(req, res){
    res = util.setResponse(res);
  var problem = req.body.ProblemId;

    model.update(
      { "_id": req.params.id  },
      { $push: { "Problems": problem }}
    )
    .then(function(enterprise){
        //res.json();
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })

   model.findById(req.params.id)
      .then(function(enterprise){
        if(!enterprise) throw Error('Empresa não encontrado')
          res.json(enterprise);      
      }, function(error){
          console.log(error);
          res.status(500).json(error);
      })  

}


module.exports = api;