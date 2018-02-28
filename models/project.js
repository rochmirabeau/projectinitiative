'use strict';
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('Project', {
    name: DataTypes.TEXT,
    about: DataTypes.TEXT,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    project_img: DataTypes.TEXT,
    creator_id: DataTypes.INT,
    votes: DataTypes.INT
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};