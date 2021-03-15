const S = require('sequelize');
const db = require('../config/index');

class Item extends S.Model {}

Item.init({
    quantity: {
        type: S.STRING
    },
},{sequelize: db, modelName:"item"});

module.exports = Item