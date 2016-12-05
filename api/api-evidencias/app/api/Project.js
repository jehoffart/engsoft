var mongoose = require('mongoose');
var util = require('util.js');

var api = {}
var model = mongoose.model('Project');

api.get = function(req, res) {  
	res = util.setResponse(res);
	model.aggregate(
           {
              $unwind: "$Team"
           },
           {
                $lookup:
                {
                    "from": "users",
                    "localField": "Team",
                    "foreignField": "_id",
                    "as": "Team_data"
                }
            }/*,
            {
                $match: { "Team_data": { $ne: [] } }
            }*/
        )
	.then(function(projects){
		res.json(projects);
	}, function(error){
		console.log(error);
		res.status(500).json(error);
	});  
};

api.getById = function(req, res) {
    res = util.setResponse(res);
    model.findById(req.params.id)
    /*model.aggregate(
            {
                $match: {"_id": req.params.id }
            },
            {
              $unwind: "$Team"
           },
           {
                $lookup:
                {
                    "from": "users",
                    "localField": "Team",
                    "foreignField": "_id",
                    "as": "Team_data"
                }
            }
        )*/
    .then(function(project){
		if(!project) throw Error('Projeto não encontrado')
			res.json(project);      
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
	res = util.setResponse(res);
	model.findByIdAndUpdate(req.params.id, req.body)
	.then(function(){
		res.json(project);
	}, function(error){
		console.log(error);
        res.status(500).json(error);
    })
}

api.findByUser = function(req, res) {
   //console.log(req.params.id);
    model.find({"Team": req.params.id })
    .then(function(projects){
      if(!projects) throw Error('Projeto não encontrado')
        res.json(projects);      
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })        
};


module.exports = api;