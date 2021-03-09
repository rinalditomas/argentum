const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/index')

class Product extends Sequelize.Model { }

Product.init({
    nombre: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.INTEGER,


    },
    // imagen: {
    //     type: Sequelize.String,

    // },
    descripcion: {
        type: Sequelize.STRING


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
    },

}, { sequelize: db, modelName: "product" })

Product.addHook("beforeCreate",function(product){
    if(product.disponible == false){
        product.nombre += " No disponible"
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
