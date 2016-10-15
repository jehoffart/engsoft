var mongoose = require('mongoose');

var api = {}
var model = mongoose.model('Enterprise');

api.get = function(req, res) {  
   model.find({})

   .then(function(enterprises){
       res.json(enterprises);
   }, function(error){
       console.log(error);
       res.status(500).json(error);
   });  
};

api.getById = function(req, res) {
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
    model.remove({_id : req.params.id})
    .then(function(){
        res.sendStatus(204);
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })       
};

api.post = function(req, res){
    var enterprise = req.body;

    model.create(enterprise)
    .then(function(empresa){
        res.json(enterprise);
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })
}

api.put = function(req, res){
     model.findByIdAndUpdate(req.params.id, req.body)
     .then(function(){
         res.json(enterprise);
     }, function(error){
        console.log(error);
        res.status(500).json(error);
    })
}


module.exports = api;