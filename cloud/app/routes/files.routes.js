var Authorization = require("../authorization");


module.exports = function(router) {


  var files = require("../controllers/files.controller");

  router.get("/files", files.redirect);
  router.get("/files/", Authorization.BasicAuthentication, files.render);


}
