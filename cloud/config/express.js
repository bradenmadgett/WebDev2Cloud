var express = require("express");
var morgan = require("morgan");
var express_session = require("express-session");
var handlebars = require("express-handlebars");
var parser = require("body-parser");

module.exports = function(){
var app = express();
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

require("../app/routes/index.routes.js")(app);

return app;
};
