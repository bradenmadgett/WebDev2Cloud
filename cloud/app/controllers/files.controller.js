exports.redirect = function(req, res){
  res.redirect("/files/");
}

exports.render = function(req, res){
  res.render("files");
}
