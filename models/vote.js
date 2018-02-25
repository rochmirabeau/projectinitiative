'use strict';
module.exports = (sequelize, DataTypes) => {
  var Vote = sequelize.define('Vote', {
    vote: DataTypes.BOOLEAN
  }, {});
  Vote.associate = function(models) {
    // associations can be defined here
  };
  return Vote;
};