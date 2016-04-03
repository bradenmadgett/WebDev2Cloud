module.exports = function(app) {
    var authorization = require("../controllers/authorization.controller");
    app.get("/auth", authorization.render);
}
