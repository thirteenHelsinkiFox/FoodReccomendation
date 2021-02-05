'use strict';
const {
  Model
} = require('sequelize');

const {hashPass} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type:DataTypes.STRING,
      unique:true,
      validate:{
        isEmail:true
      }
    },
    password: {
     type: DataTypes.STRING,
     validate:{
       notEmpty: true
     }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks:{
      beforeCreate: (instanceUser, opt) => {
        instanceUser.password = hashPass(instanceUser.password)
      }
    }
  });
  return User;
};