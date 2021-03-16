const S = require('sequelize');
const db = require('../config/index');

class Item extends S.Model {}

Item.init({// chequear tablas que tenga columna producto
    quantity: {
        type: S.INTEGER
    },
},{sequelize: db, modelName:"item"});

module.exports = Item