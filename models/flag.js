'use strict';
module.exports = (sequelize, DataTypes) => {
  var Flag = sequelize.define('Flag', {
    user_id: DataTypes.INTEGER,
    comment_id: DataTypes.INTEGER
  }, {});
  Flag.associate = function(models) {
    // associations can be defined here
  };
  return Flag;
};