'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.PASSWORD,
    profile_img: DataTypes.TEXT,
    about_me: DataTypes.TEXT
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};