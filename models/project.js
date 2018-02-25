'use strict';
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('Project', {
    name: DataTypes.TEXT,
    location: DataTypes.TEXT,
    about: DataTypes.TEXT,
    project_img: DataTypes.TEXT,
    creator_id: DataTypes.INT,
    votes: DataTypes.INT
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};