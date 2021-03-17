const { Sequelize } = require('sequelize');
const db = require ('../config/index')

class Cart extends Sequelize.Model{}

Cart.init({

    estado: {
     type: Sequelize.ENUM({
        values: ['accepted', 'pending','rejected','active']//active actual, pasa a pending con checkout, admin lo acepta
        
      }),
      defaultValue: 'active',
    },
  }, {sequelize : db, modelName: "cart"})

  module.exports = Cart;