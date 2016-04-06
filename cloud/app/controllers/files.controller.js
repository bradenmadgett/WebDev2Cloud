exports.redirect = function(req, res){
  res.redirect("/files/");
}

exports.render = function(req, res){
  res.render("files");
}

var fs= require('fs');

exports.upload = function(req, res, next){
  fs.rename(req.file.path, './files/' + req.file.originalname);
  req.session.name = req.file.originalname;
  res.locals.upload = req.file.originalname;
  res.render('files');
}
