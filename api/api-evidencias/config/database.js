 module.exports = function(uri){
var mongoose = require('mongoose');
    
mongoose.connect('mongodb://' + uri);

mongoose.connection.on('connected', function(){
    console.log('Conectado ao banco de dados');
});

mongoose.connection.on('error', function(error){
    console.log('Erro na conexao' + error);
});

mongoose.connection.on('disconected', function(){
    console.log('Banco desconectado');
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log('Conexão fechada.');
        process.exit(0);
    });
});
}