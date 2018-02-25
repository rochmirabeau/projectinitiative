'use strict';
module.exports = (sequelize, DataTypes) => {
  var Flag = sequelize.define('Flag', {
    user_id: DataTypes.INT,
    comment_id: DataTypes.INT
  }, {});
  Flag.associate = function(models) {
    // associations can be defined here
  };
  return Flag;
};