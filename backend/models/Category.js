const Sequelize = require('sequelize');
const db = require('../config/index');

class Category extends Sequelize.Model {}

Category.init({
    nombre: {
        type: Sequelize.STRING,
    },
	
},{sequelize: db, modelName:"category"});

module.exports = Category