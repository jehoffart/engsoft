var mongoose = require('mongoose');
var util = require('util.js');

var api = {}
var model = mongoose.model('Problem');

api.get = function(req, res) {  
	res = util.setResponse(res);
	model.find({})

   .then(function(problems){
       res.json(problems);
   }, function(error){
       console.log(error);
       res.status(500).json(error);
   });  
};

api.getById = function(req, res) {
	res = util.setResponse(res);
    model.findById(req.params.id)
    .then(function(problem){
      if(!problem) throw Error('Problema não encontrado')
        res.json(problem);      
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
    var problem = req.body;

    model.create(problem)
    .then(function(problem){
        res.json(problem);
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })
}

api.put = function(req, res){
     model.findByIdAndUpdate(req.params.id, req.body)
     .then(function(){
         res.json(problem);
     }, function(error){
        console.log(error);
        res.status(500).json(error);
    })
}


module.exports = api;