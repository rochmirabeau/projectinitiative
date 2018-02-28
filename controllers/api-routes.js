// Require all models
var db = require("../models");

// Set up api routes
module.exports = function(app) {

  // ============================================== //
  // ============ GET ROUTES FOR USERS ============ //
  // ============================================== //

  // Get all users
  app.get("/api/users/", function(req, res) {
    db.User.findAll({})
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Get one user
  app.get("/api/users/:email", function(req, res) {
    db.User.findOne({
      where: {
        email: req.params.email
      }
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // ============================================== //
  // ========== GET ROUTES FOR PROJECTS =========== //
  // ============================================== //

  // Get all projects
  app.get("/api/projects/", function(req, res) {
    db.Project.findAll({})
    .then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // Get all projects of a specific user
  app.get("/api/projects/:user_id", function(req, res) {
    db.Project.findAll({
      where: {
        user_id: req.params.user_id
      }
    })
    .then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // Get all projects of a specific subject
  app.get("/api/projects/:about", function(req, res) {
    db.Project.findAll({
      where: {
        about: req.params.about
      }
    })
    .then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // ============================================== //
  // ========== GET ROUTES FOR COMMENTS =========== //
  // ============================================== //

  // Get all comments
  app.get("/api/comments/", function(req, res) {
    db.Comment.findAll({})
    .then(function(dbComment) {
      res.json(dbComment);
    });
  });

  // Get all comments of a specific user
  app.get("/api/comments/:user_id", function(req, res) {
    db.Comment.findAll({
      where: {
        user_id: req.params.user_id
      }
    })
    .then(function(dbComment) {
      res.json(dbComment);
    });
  });

  // Get all comments of a specific project
  app.get("/api/comments/:project_id", function(req, res) {
    db.Comment.findAll({
      where: {
        project_id: req.params.project_id
      }
    })
    .then(function(dbComment) {
      res.json(dbComment);
    });
  });

 
  // ============================================== //
  // ================= POST ROUTES ================ //
  // ============================================== //
  
  // Create a new user
  app.post("/api/users", function(req, res) {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profile_img: req.body.profile_img,
      about_me: req.body.about_me
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new project
  app.post("/api/projects", function(req, res) {
    db.Project.create({
      name: req.body.name,
      location: req.body.location,
      about: req.body.about,
      project_img: req.body.project_img
    })
    .then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // Create a new comment
  app.post("/api/users", function(req, res) {
    db.Comment.create({
      text: req.body.text
    })
    .then(function(dbComment) {
      res.json(dbComment);
    });
  });

  // ============================================== //
  // ================ DELETE ROUTES =============== //
  // ============================================== //
  
  // Delete a user
  app.delete("/api/users/:email", function(req, res) {
    db.User.destroy({
      where: {
        email: req.params.email
      }
    })
    .then(function(dbUser) {
      res.json(dbUser);
    }).catch(function(e) {
      console.warn(e);
    });
  });

  // Delete a project
  app.delete("/api/projects/:project_id", function(req, res) {
    db.Project.destroy({
      where: {
        project_id: req.params.project_id
      }
    })
    .then(function(dbProject) {
      res.json(dbProject);
    }).catch(function(e) {
      console.warn(e);
    });
  });

  // Delete a comment
  app.delete("/api/users/:user_id", function(req, res) {
    db.Comment.destroy({
      where: {
        user_id: req.params.user_id
      }
    })
    .then(function(dbComment) {
      res.json(dbComment);
    }).catch(function(e) {
      console.warn(e);
    });
  });

  // ============================================== //
  // ================ UPDATE ROUTES =============== //
  // ============================================== //
  
  // Update a user
  app.put("/api/users", function(req, res) {
    db.User.update({
      where: {
        user_id: req.body.user_id
      }
    })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Update a project
  app.put("/api/projects", function(req, res) {
    db.Project.update({
      where: {
        project_id: req.body.project_id
      }
    })
    .then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // Update a comment
  app.put("/api/comments", function(req, res) {
    db.Comment.update({
      where: {
        comment_id: req.body.comment_id
      }
    })
    .then(function(dbComment) {
      res.json(dbComment);
    });
  });

};
