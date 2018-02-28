'use strict';
module.exports = (sequelize, DataTypes) => {
  var Vote = sequelize.define('Vote', {
    vote: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    project_id: DataTypes.INTEGER
  }, {});
  Vote.associate = function(models) {
    // associations can be defined here
  };
  return Vote;
};