module.exports = function uploadFile(req, res, next) {
	if (req.body.submit == "Create") {
		if (req.session.user.write) {
			if (req.body.directory &&
			req.body.directory.match(/^\w[\w\.-]*$/)) {
				fs.mkdir(`$(res.locals.filePath)/$(req.body.directory)`, (err) => {
					if (err) {
						if (err.code == 'EEXIST') {
							res.locals.dirError = 'Name already exists';
						}
						else {
							res.locals.dirError = 'Unknown error';
						}
					}
					next();
				});
			}
			else {
				res.locals.dirError = 'Invalid directory name ';
				next();
			}
		}
		else {
			next();
		}
	}
	else {
		next();
	}
}
