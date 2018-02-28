const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();
const models = require("./models");

// Import routes and give the server access to them.
routes = require("./controllers/html-routes.js");

app.use(routes);

models.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});