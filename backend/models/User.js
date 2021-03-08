const { Sequelize, DataTypes } = require('sequelize');
const db = require ('../config/index')
// const bcrypt = require('bcrypt');

class User extends Sequelize.Model{}

User.init({

    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { isEmail: true }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }

  }, {sequelize : db, modelName: "user"})



//   User.prototype.hashPassword = function (password,salt){
//    return bcrypt.hash(password, salt) 
//     }

//   User.beforeCreate((user) => {
//     return bcrypt
//       .genSalt(16)
//       .then((salt) => {
//         user.salt = salt;
//         return user.hashPassword(user.password, user.salt);
//       })
//       .then((hash) => {
//         user.password = hash;
//       });
//   });

module.exports = User;