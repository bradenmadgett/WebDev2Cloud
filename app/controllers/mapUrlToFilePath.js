var fs = require('fs');
var config = require('../../config');

module.exports = function mapUrlToFilePath(req, res, next) {
	res.locals.url = req.originalUrl.match(/[^\?]*/)[0];

	var filePath = config.documentRoot + req.url.match(/[^\?]*/)[0];

	fs.stat(filePath, (err, info) => {
		if (err) {
			res.status(404);
			res.render('404_error');
		}
		else {
			res.locals.filePath = filePath;
			res.locals.info = info;
			next();
		}
	});
};
