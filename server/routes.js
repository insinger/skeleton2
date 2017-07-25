// define API route handlers
// Load controller(s) and wire up API endpoints to functions defined in the controller(s)

module.exports = function(app, dbmodels) {
  var WelcomeController = require('./api/welcome.controller')(dbmodels); 

  // Check if logged in
  app.get("/api/isloggedin", WelcomeController.isloggedin);

};
