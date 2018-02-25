'use strict';
module.exports = (sequelize, DataTypes) => {
  var Vote = sequelize.define('Vote', {
    vote: DataTypes.BOOLEAN,
    user_id: DataTypes.TEXT,
    project_id: DataTypes.TEXT
  }, {});
  Vote.associate = function(models) {
    // associations can be defined here
  };
  return Vote;
};