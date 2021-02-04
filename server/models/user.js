'use strict';
const {
  Model
} = require('sequelize');
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
      unique:{
        args:true,
        msg:'Email already exist'
      },
      validate:{
        isEmail:{
          args:true,
          msg:'Invalil email'
        }
      }
    },
    password: DataTypes.STRING
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