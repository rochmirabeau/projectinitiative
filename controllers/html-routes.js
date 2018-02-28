// Require dependencies
var path = require("path");

// Set up html routes
module.exports = function(app) {
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/users", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

  app.get("/projects", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/project.html"));
  });

  app.get("/comments", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/comment.html"));
  });
};