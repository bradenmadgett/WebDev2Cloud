module.exports = function(app) {
	var error404 = require('../controllers/404_error.server.controller');
	app.get('/*', error404.render);
};
