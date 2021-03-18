const S = require('sequelize');
const db = require('../config/index');

class Category extends S.Model {}

Category.init({
    nombre: {
        type: S.STRING
    },
    descripccion:{
        type: S.TEXT
    }
},{sequelize: db, modelName:"category"});

module.exports = Category