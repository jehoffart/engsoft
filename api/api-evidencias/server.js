var http = require('http'),
    db = require('./config/database')('facens:facens@ds028679.mlab.com:28679/facens'),
    app = require('./config/express');

http.createServer(app).listen(3000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
    
});

