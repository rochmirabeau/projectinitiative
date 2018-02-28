// Require dependencies
var path = require("path");

// Set up html routes
module.exports = function(app) {
  app.get('/api/clickable', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client-old/clickable.html'))
  });
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../client/index.html"));
  // });
  // app.get("/users", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/user.html"));
  // });

  // app.get("/projects", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/project.html"));
  // });

  // app.get("/comments", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/comment.html"));
  // });
};