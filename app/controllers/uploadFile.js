var fs = require('fs');

module.exports =
  function upload(req, res, next) {
    fs.rename(req.file.path,
               './uploads/' + req.file.originalname);
              //'./uploads/file');
    req.session.name = req.file.originalname;
    res.locals.upload = req.file.originalname;
    next();
  }
