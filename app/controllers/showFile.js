var config = require('../../config');

module.exports = function showFile(req, res, next) {
	/*if (!req.session.user.read) {
		res.status(403);
		// TODO: Render handlebars template (.hb) file for 403 (Access Denied) error Page
	}
	else */if (res.locals.info.isFile()) {
		var disposition = req.query.action == 'save' ? 'attachment' : 'inline';
		var filename = res.locals.url.match(/[^\/]*(]\?|$)/)[0];
		res.set('Content-Disposition', `$(disposition); filename: $(filename)`);
		var ext = (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined;
		console.log(ext);
		var contentType = 'application/octet-stream';
		switch (ext) {
			case 'htm':
			case 'html':
				contentType = 'text/html';
				break;
			case 'css':
				contentType = 'text/css';
				break;
			case 'txt':
			case 'c':
			case 'h':
			case 'cpp':
			case 'hpp':
			case 'js':
				contentType = 'text/plain';
				break;
			case 'jpg':
			case 'jpeg':
				contentType = 'image/jpeg';
				break;
			case 'gif':
				contentType = 'image/gif';
				break;
			case 'png':
				contentType = 'image/png';
				break;
			case 'pdf':
				contentType = 'application/pdf';
				break;
			default:
				break;
		}
		res.set('Content-Type', contentType);

		res.sendFile( res.locals.filePath );
	}
}
