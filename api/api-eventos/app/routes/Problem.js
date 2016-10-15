
module.exports  = function(app) {

    var api = app.api.Problem;

    app.route('/problem')
    .get(api.get)
    .post(api.post); 

    app.route('/problem/:id')
    .get(api.getById)
    .delete(api.delete)
    .put(api.put);
        
  
};