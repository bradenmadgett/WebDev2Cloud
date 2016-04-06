var express = require("./config/express");
var morgan = require("morgan");

var app = express();

app.listen(8000);
module.exports = app;

console.log("Server running at http://loclahost:8000/");
