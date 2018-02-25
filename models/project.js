'use strict';
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('Project', {
    name: DataTypes.TEXT
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};