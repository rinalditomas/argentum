const express = require('express');
const router = express.Router();
const {Product, Category} = require("../models/index")
const { Op } = require("sequelize");

router.get ("/", (req,res,next) => {
    // console.log(req.query)
    if (req.query.producto){
        Product.findAll({
            where:{
                nombre:{
                    [Op.like]: req.query.producto
                }
            }
        })
        // .then(categorias =>{
        //    categorias.map((categoria)=>{
        //     Producto.findAll({
        //         where:{
        //             categoriumId: categoria
        //         }
        //     })
        //    })
        .then((productos)=>{
            res.send(productos)
            })
            .catch (error =>{
                next (error)
            })
        //})
    }else{
    Product.findAll()
    .then (productos => {
        res.send (productos)
    })
    .catch (error =>{
        next (error)
    })
    }
})

router.get("/search/:query", (req, res) => {
    let query = req.params.query
    console.log(query)
        Product.findAll({
        where:{
            nombre:{
                [Op.substring]:query
            }
        }
    })
    .then(producto => { res.send(producto) })
    .catch (error =>{
        next (error)
    })
})



router.get("/:id", (req, res) => {
    let id = req.params.id
console.log(id)
    Product.findByPk(id)
    .then(producto => { res.send(producto) })
    .catch (error =>{
        next (error)
    })
})

//AGREGAR UNA RUTA PARA CREAR PRODUCTOS SIN CATEGORIA ????????

router.post ("/", (req,res,next)=>{
    Product.create (req.body)
    .then ((producto)=>{
        if(req.body.categoryId){
            Category.findOne({
                where :{
                    nombre:req.body.categoryId
                }
            })
            .then((categoria)=>{
                producto.setCategories(categoria)
                .then((ProdCat)=>{
                    return res.send(producto)
                })
            })
        }else{
            return res.send(producto)
        }
    })
    .catch(errr => console.log("HUBO UN ERROR"))
})

/* router.post ("/cart", (req,res,next)=>{
    console.log(req.body)
    Product.findOne ({where:{nombre: req.body.nombre}})
    .then ((producto)=>{
        res.send(producto)
    })
})
 */

/* router.get("/cart", (req, res) => {
    console.log(req.body)
    Product.findAll()
    .then(producto =>  res.send(producto) )
})
 */

router.put("/:id", (req, res, next) => {
    let id = req.params.id;
    
    Product.findByPk(id)
        .then(data => {
            !data ? res.sendStatus(404) :
                data.update(req.body)
                    .then(data => res.send(data))
        })
        .catch (error =>{
            next (error)
        })
        
})


router.delete("/:id", (req, res, next) => {
    let productoId = req.params.id;

    Product.destroy({
        where: {
            id: productoId
        }
    }).then(() => {

        res.send("Producto eliminado!!")

    })
    .catch (error =>{
        next (error)
    })
})

module.exports = router