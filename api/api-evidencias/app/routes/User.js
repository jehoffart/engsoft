
module.exports  = function(app) {

    var api = app.api.User;

    app.route('/user')
    .get(api.get)
    .post(api.post); 

    app.route('/user/:id')
    .get(api.getById)
    .delete(api.delete)
    .put(api.put);
        
  
};