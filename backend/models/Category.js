const Sequelize = require('sequelize');
const db = require('../config/index');

class Category extends Sequelize.Model {}

Category.init({
    nombre: {
        type: S.STRING
    },
categoria: {
    type: S.STRING
},
descripccion:{
    type: S.TEXT
}

},{sequelize: db, modelName:"category"});

module.exports = Category