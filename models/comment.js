'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    text: DataTypes.TEXT,
    project_id: DataTypes.INT,
    user_id: DataTypes.INT,
    flags: DataTypes.INT
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
  };
  return Comment;
};