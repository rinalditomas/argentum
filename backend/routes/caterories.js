const express = require('express');
const router = express.Router();
const {Category, Product} = require("../models/index")
const { Op } = require("sequelize");
const { findAll } = require('../models/Category');

//// CREAR CATEGORIA
router.post ("/", (req,res,next)=>{
    Category.create (req.body)
    .then ((categoria)=>{
        res.send(categoria)
    })
})
///// BORRAR CATEGORIA
router.delete("/:nombre", (req, res, next) => {
   Category.findOne({
    where: {
        nombre: req.body.nombre,
      },
   })
   .then((categoria)=>{
       categoria.destroy()
       .then(()=>{
           console.log("categoria eliminada")
           res.send("se elimino tu producto correctamente")
        })
   })
})
//// EDITAR CATEGORIA
router.put("/:nombre", (req, res, next) => {
    console.log(req.body)
    Category.findOne({
        where: {
            nombre: req.body.nombre,
          },
       })
    .then((categoria)=>{
       const cambio = req.body.cambio
  
        categoria.nombre = cambio
        categoria.save()
        .then(data=> res.send(data))
    })
  
})

/// BUSCAR CATEGORIA
router.get("/search/:query", (req, res) => {
    Category.findAll({
        where: {
            nombre:{
                [Op.substring]:req.params.query,
            } 
          },include: Product
       },)
       .then((productos)=>{ 
           res.send(productos[0].products)
       })
        .catch(err => console.log("hubo un error"))
})

////BUSCAR TODAS LAS CATEGORIAS
router.get("/search/", (req, res) => {
    Category.findAll()
    .then((categorias)=>{
        res.send(categorias)
    })
    .catch(err => console.log(err))
})

module.exports = router