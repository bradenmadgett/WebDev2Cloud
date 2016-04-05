exports.redirect = function(req, res){
  res.redirect("/files/");
}

exports.render = function(req, res){
  res.render("files");
}

var fs= require('fs');

exports.upload = function(req, res){
  
  req.session.name = req.file.originalname;
  res.locals.upload = req.file.originalname;
  res.render('files');
}
