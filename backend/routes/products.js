
const express = require('express');
const router = express.Router();

const Producto = require("../models/Product")

router.get("/", (req, res, next) => {
    Producto.findAll({}).then(productos => {
        res.send(productos)
    })
})

router.get("/:id", (req, res) => {
    let id = req.params.id
    Producto.findById(id)
    .then(producto => { res.send(producto) })
})

router.post ("/", (req,res,next)=>{
    Producto.create (req.body)
    .then (()=>{
        res.send("Producto creado")
    })
})

router.put("/:id", (req, res, next) => {
    let id = req.params.id;
    let body = req.body

    Producto.update(body, {
        where: {
            id: id
        }
    }).then(producto => {
        res.send(producto)
    })
})

router.delete("/:id", (req, res, next) => {
    let productoId = req.params.id;

    Producto.destroy({
        where: {
            id: productoId
        }
    }).then(producto => {

        res.send(producto)
    })
})

module.exports = router