const express = require("express");
const router = express.Router()
const {Cart,Item,Product} = require ('../models')
const jwt= require ("jsonwebtoken")
const checkJWT= require("./middlewares/jwt")
const isAdmin=require("./middlewares/isAdmin")

router.get("/private",checkJWT,isAdmin,(req,res)=>{
    res.status(200).json(req.user)
     })
router.post("/add",(req,res,next)=>{
    Cart.create(req.body)
    .then((user) => {
    res.status(201).send(user)})
    .catch(next)
})

module.exports = router