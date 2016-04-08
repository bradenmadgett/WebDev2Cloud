var config = require('../config');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var expressHandlebars = require('express-handlebars');
var multer = require('multer');

var app = express();

app.engine( 'hb', expressHandlebars( {
	defaultLayout: null,
	parialsDir: './views/partials',
	extname: '.hb'
}));
app.set( "view engine", "hb" );

app.use(expressSession({
	secret: config.sessionSecret,
	saveUninitialized: false,
	resave: false
} ));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan(config.logLevel));

app.use('/', require('./routes'));

app.use(express.static('./public'));

module.exports = app;
