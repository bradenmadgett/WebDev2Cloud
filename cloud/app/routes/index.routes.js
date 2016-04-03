var Authentication = require("../authorization");

module.exports = function(app) {
    var index = require("../controllers/index.controller");
    app.get("/", Authentication.BasicAuthentication, index.render);
}
