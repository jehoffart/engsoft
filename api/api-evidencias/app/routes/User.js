
module.exports  = function(app) {

    var api = app.api.User;

    app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

    app.route('/user')
    .get(api.get)
    .post(api.post);

    app.route('/user/:id')
    .get(api.getById)
    .delete(api.delete)
    .put(api.put);


};
