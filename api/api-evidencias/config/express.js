var express = require('express')
    ,app = express()
    ,consign = require('consign')
    ,bodyParser = require('body-parser');
    var morgan      = require('morgan');
    var jwt         = require('jwt-simple');
    var passport    = require('passport');




app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

    consign({cwd: 'app'})
    .include('models')
    .then('api')
    .then('routes')
    .into(app);

app.use(morgan('dev'));
 require('./passport')(passport);
// Use the passport package in our application
app.use(passport.initialize());

module.exports = app;