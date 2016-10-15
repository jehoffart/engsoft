var mongoose = require('mongoose');

var api = {}
var model = mongoose.model('User');

api.get = function(req, res) {  
   model.find({})
   .then(function(users){
       res.json(users);
   }, function(error){
       console.log(error);
       res.status(500).json(error);
   });  
};

api.getById = function(req, res) {
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
    model.remove({_id : req.params.id})
    .then(function(){
        res.sendStatus(204);
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })       
};

api.post = function(req, res){
    var user = req.body;

    model.create(user)
    .then(function(user){
        res.json(user);
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })
}

api.put = function(req, res){
     model.findByIdAndUpdate(req.params.id, req.body)
     .then(function(){
         res.json(user);
     }, function(error){
        console.log(error);
        res.status(500).json(error);
    })
}

module.exports = api;