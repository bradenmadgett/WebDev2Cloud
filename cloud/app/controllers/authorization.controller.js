var auth = require('basic-auth');

exports.render = function(req, res){
  var credentials = auth(req);

  if(credentials && credentials.name == "test" && credentials.pass == "test123")
  {
    res.render('home');
  }
  else {
    res.status(401);
    res.set('WWW-Authenticate', 'Basic realm=Authorized Page');
    res.render('unauthorized', {header: req.get('Authorization')});
  }
}
