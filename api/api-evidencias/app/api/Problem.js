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

  var modelProject = mongoose.model('Project');
   
  var array = [];

  model.findById(req.params.id).lean().exec(function(err, problem){
       var i = problem.Registrations.length -1;

      problem.Registrations.forEach(function(item,index){

              modelProject.find({_id: item.ProjectId}).then(function(retorno){
                  array.push(retorno[0]);
                 // console.log(JSON.stringify(retorno));
            
                // console.log(index);
                 //console.log(i);
               
                  if(index>= i)
                  {
                    problem.RegistrationsData = array;
                      res.json(problem);
                  }
                
              })

      });



  });
    

/*

      problem.Registrations.forEach(function(item){
            modelProject.find({_id: item.ProjectId}).then(function(retorno){
                array.push(retorno);
              // console.log(retorno);
            });
          });

    model.findById(req.params.id)
    .then(function(problem){
      if(!problem) throw Error('Problema não encontrado')


          problem.Registrations.forEach(function(item){
            modelProject.find({_id: item.ProjectId}).then(function(retorno){
               // array.push(retorno);
                //console.log(retorno);
                problem.Registrations


            });
          });

*/

/*
            modelProject.find({_id: {$in: problem.Registrations}}).then(function(retorno){
                console.log(retorno);
                problem.Registrations = retorno;
              //  console.log(project.Team);
                res.json(problem);
            });
          
        
       res.json(problem);
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })     */   
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
    res = util.setResponse(res);
     model.findByIdAndUpdate(req.params.id, req.body)
     .then(function(problem){
         res.json(problem);
     }, function(error){
        console.log(error);
        res.status(500).json(error);
    })
}

api.newProject = function(req, res){
  res = util.setResponse(res);
  var project = req.body;
  //console.log(project);
    model.update(
      { "_id": req.params.id  },
      { $push: { "Registrations": project }}
    )

    .then(function(problem){
      //  res.json(problem);
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })

      model.findById(req.params.id)
    .then(function(problem){
      if(!problem) throw Error('Problema não encontrado')
        res.json(problem);      
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    }) 
}



api.findByProject = function(req, res){
  res = util.setResponse(res);
    model.find({"Registrations.ProjectId": req.params.id})
    .then(function(problem){
      if(!problem) throw Error('Problema não encontrado')
        res.json(problem);      
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    }) 
}

module.exports = api;