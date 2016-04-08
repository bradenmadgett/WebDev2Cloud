var fs = require('fs');

module.exports = function(req, res, next) {
	if (res.locals.url.match(/\/(\?|$)/)) {
		fs.readdir(res.locals.filePath, (err, names) => {
			if (err) {
				res.status(500);
				// TODO: Render handlebars template (.hb) file for 500 code response page
			}
			else {
				var entries = names.map((name) => {
					if (fs.statSync(res.locals.filePath + name).isDirectory()) {
						return {name: name, isDir: true};
					}
					else {
						return {name: name, isFile: true};
					}
				})

				entries.sort(compareEntries);

				res.render('directory', {entries: entries});
			}
		})
	}
	else {
		next();
	}
}
