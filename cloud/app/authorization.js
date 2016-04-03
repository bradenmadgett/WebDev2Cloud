var auth = require('basic-auth');

exports.BasicAuthentication = function(req, res, next){
  function unauthorized(res) {
    res.set('WWW-Authenticate', 'Basic realm=Authorized Page');
    return res.send(401);
  }

  var credentials = auth(req);

  if(credentials && credentials.name == "test" && credentials.pass == "test123")
  {
    return next();
  }
  else {
    return unauthorized(res);
  }
}
