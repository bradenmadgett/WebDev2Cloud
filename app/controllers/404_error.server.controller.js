exports.render = function(req, res) {
	res.header('Content-Type', 'text/html');
	res.render('404_error', {});
};
