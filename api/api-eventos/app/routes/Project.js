
module.exports  = function(app) {

    var api = app.api.Project;

    app.route('/project')
    .get(api.get)
    .post(api.post); 

    app.route('/project/:id')
    .get(api.getById)
    .delete(api.delete)
    .put(api.put);
        
  
};