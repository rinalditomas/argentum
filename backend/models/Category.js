const S = require('sequelize');
const db = require('../config/index');

class Category extends S.Model {}

Category.init({
nombre:{
        type: S.STRING
},

},{sequelize: db, modelName:"category"});

module.exports = Category