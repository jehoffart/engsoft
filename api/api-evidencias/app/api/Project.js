var mongoose = require('mongoose');

var api = {}
var model = mongoose.model('Project');

api.get = function(req, res) {  
   model.find({})
   .then(function(projects){
       res.json(projects);
   }, function(error){
       console.log(error);
       res.status(500).json(error);
   });  
};

api.getById = function(req, res) {
    model.findById(req.params.id)
    .then(function(project){
      if(!project) throw Error('Projeto não encontrado')
        res.json(project);      
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })        
};

api.delete = function(req, res) {
    model.remove({_id : req.params.id})
    .then(function(){
        res.sendStatus(204);
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })       
};

api.post = function(req, res){
    var project = req.body;

    model.create(project)
    .then(function(project){
        res.json(project);
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })
}

api.put = function(req, res){
     model.findByIdAndUpdate(req.params.id, req.body)
     .then(function(){
         res.json(project);
     }, function(error){
        console.log(error);
        res.status(500).json(error);
    })
}

module.exports = api;