  const S = require("sequelize");
  const db = require("../config");
  const crypto= require("crypto")
  
  class User extends S.Model {}
  
  User.init(
    {
      email: {
        type: S.STRING,
        allowNull: false,
        validate:{
          isEmail:{
              msg: 'Agrega un correo válido'
          },
          notEmpty:{
              msg:'Favor ingrese un correo electronico'
          }
        }
      },
      password: {
        type: S.STRING,
        allowNull: false,
      }, 
      name: {
        type: S.STRING,
        allowNull: false
      },
      lastName: {
        type: S.STRING,
        allowNull: false
      },
      address: {
        type: S.STRING,
        allowNull: true
      },
      isAdmin: {
        type: S.BOOLEAN,
        defaultValue: false
      },
      salt:{
        type:S.STRING,
      }
    },
    { sequelize: db, modelName: "user" }
  );
  User.addHook("beforeCreate",(user)=>{
    user.salt=crypto.randomBytes(20).toString("hex")
    user.password = user.hashPassword(user.password)
  })
  User.prototype.hashPassword=function(password){
    return crypto.createHmac ("Sha1", this.salt).update(password).digest("hex")
  }
  User.prototype.validPassword = function(passwordEnLogin){
    return this.password === this.hashPassword(passwordEnLogin)
  }
  
  module.exports = User;