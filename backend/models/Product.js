const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/index')

class Product extends Sequelize.Model { }

Product.init({
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    precio: {
        type: Sequelize.INTEGER,
        allowNull: false,

    },
    // imagen: {
    //     type: Sequelize.String,
        
    // },
    descripcion: {
        type: Sequelize.TEXT


    },
    disponible: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    stock: {
        type: Sequelize.INTEGER,
        
        set(){
            if(this.stock == "0"){
                return this.disponible= false;
            }
        }
    }

}, { sequelize: db, modelName: "producto" })

Product.addHook("beforeCreate",function(producto){
    if(this.disponible == false){
        Product.nombre= this.nombre + " No disponible"
    }

})

Product.sinStock = function () {
    return Product.findAndCountAll({
        where: {
            disponible: false, 
            stock: 0
        }
    })
}

module.exports = Product