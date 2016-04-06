var express = require("express");
var morgan = require("morgan");
var express_session = require("express-session");
var handlebars = require("express-handlebars");
var parser = require("body-parser");
var multer = require("multer");
var parser = require("body-parser");

module.exports = function(){
var app = express();
app.enable('strict routing');

var router = express.Router({strict: app.get('strict routing')});

app.use(router);
app.use(morgan("dev"));
app.use(express_session({
  saveUninitialized:true,
  resave:true,
  secret: "secret"
}))

app.use(express.static("./public"));
app.engine("hb", handlebars({defaultLayout:null}));
app.set("view engine", "hb");
app.set("views","./app/views");

app.use(parser.urlencoded({encoded: false}));

require("../app/routes/index.routes.js")(app);
require("../app/routes/files.routes.js")(app);

return app;
};
