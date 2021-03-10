const express = require('express');
const router = express.Router();

const Product = require("../models/Product")

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

// router.post("/", (req, res)=>{
//     console.log("ESTAMOS EN POST", req.body)
//     console.log(req.body)
//     Producto.create(req.body)
//     .then(producto=> {res.send(producto) })
// })
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