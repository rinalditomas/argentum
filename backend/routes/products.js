


const express = require('express');
const router = express.Router();

const Product = require("../models/Product")

router.get ("/", (req,res,next) => {
    if (req.query.categoria){
        Categoria.findAll({
            where:{
                nombre:{
                    [Op.like]: req.query.categoria
                }
            }
        })
        .then(categorias =>{
           categorias.map((categoria)=>{
            Producto.findAll({
                where:{
                    categoriumId: categoria
                }
            })
           })
            .then((productos)=>{
                res.send(productos)
            })
        })
    }else{
    Producto.findAll()
    .then (productos => {
        res.send (productos)
    })
    .catch (error =>{
        next (error)
    })
    }
})
router.get("/", (req, res, next) => {
    Product.findAll({}).then(productos => {
        res.send(productos)
    })
})

router.get("/:id", (req, res) => {
    let id = req.params.id

    Product.findByPk(id)
    .then(producto => { res.send(producto) })
})

router.post ("/", (req,res,next)=>{
    Product.create (req.body)
    .then ((producto)=>{
        res.send(producto)
    })
})


router.put("/:id", (req, res, next) => {
    let id = req.params.id;
    
    Product.findByPk(id)
        .then(data => {
            !data ? res.sendStatus(404) :
                data.update(req.body)
                    .then(data => res.send(data))
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
})

module.exports = router