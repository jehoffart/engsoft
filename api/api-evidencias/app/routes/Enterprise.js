
module.exports  = function(app) {

    var api = app.api.Enterprise;

    app.route('/enterprise')
    .get(api.get)
    .post(api.post); 

    app.route('/enterprise/:id')
    .get(api.getById)
    .delete(api.delete)
    .put(api.put);
        
  
};