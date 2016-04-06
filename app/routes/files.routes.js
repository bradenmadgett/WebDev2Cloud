var Authorization = require("../authorization");
var multer = require('multer');


module.exports = function(router) {

  var files = require("../controllers/files.controller");
  var upload = multer({dest: '../files/'});

  router.get("/files", files.redirect);
  router.get("/files/", Authorization.BasicAuthentication, files.render);
  router.post('/files/', upload.single('myfile'), files.upload);

}
