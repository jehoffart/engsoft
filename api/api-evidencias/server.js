var http = require('http'),
    db = require('./config/database')('localhost/facens'),
    app = require('./config/express');

http.createServer(app).listen(3000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
    
});

