import http = require('http');
import express = require('express');
import path = require('path');
var bodyParser = require('body-parser');
var vash = require('vash'); //view engine
import mongoose = require("mongoose");

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', vash.__express);

//options
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());
//app.use(express.methodOverride());
//app.use(express.favicon());
//app.use(express.logger('dev'));

//router
app.all('*', (req, res, next) => {
    console.log(req.method, req.url);
    next();
});

//register controllers
import controllerIndexModule = require('./controllers/_Index');
controllerIndexModule.Init(app);

//if (process.env.NODE_ENV === 'production') {
//    app.set('port', '80');
//}
var port = process.env.PORT || 1337;
http.createServer(app).listen(port, () => {
    console.log('Express server listening on port ' + port);
});

//db connection
mongoose.connect("mongodb://bb123:bb123test@ds050077.mongolab.com:50077/bibbytestdb",
{
    server: {
        poolSize: 5
    }
});

