// Require dependencies
const path = require("path");
const express = require('express')
const router = express.Router();
// Set up html routes
router.get('/clickable', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client-old/clickable.html'))
});
module.exports = router;
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