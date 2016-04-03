var Authorization = require("../authorization");

module.exports = function(app) {
    var index = require("../controllers/index.controller");
    app.get("/", Authorization.BasicAuthentication, index.render);
}
