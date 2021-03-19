const express = require("express");
const router = express.Router()
const {User} = require ('../models/index')
const jwt= require ("jsonwebtoken")
const checkJWT= require("./middlewares/jwt")
const isAdmin=require("./middlewares/isAdmin")
const { Op } = require("sequelize");

router.post("/register", (req, res,next) => {  
    
    User.create(req.body)
      .then((user) => {
      res.status(201).send(user)})
      .catch(next)
});

router.post("/admin/login", isAdmin, (req, res)=>{
    const {email,password} = req.body
    console.log("ESTE ES EL BODY",req.body)
    User.findOne({
        where:{
            email,
        }
    }).then ((user)=>{
        if(!user){
            return res.status(400).send("usuario inexistente")
        }
        if(!user.validPassword(password)){
            return res.status (401).send("invalid credentials")
        }
        const token= jwt.sign({id:user.id,email:user.email,name:user.name,isAdmin:user.isAdmin},"argentum")
      return res.status(200).json({token})  
    })
    .catch (error =>{
       next (error)
   })
 }

)



router.post('/login',(req,res)=>{
     const {email,password} = req.body
     User.findOne({
         where:{
             email,
         }
     }).then ((user)=>{
         if(!user){
             return res.status(400).send("usuario inexistente")
         }
         if(!user.validPassword(password)){
             return res.status (401).send("invalid credentials")
         }
         const token= jwt.sign({id:user.id,email:user.email,name:user.name,isAdmin:user.isAdmin},"argentum")
       return res.status(200).json({token})  
     })
     .catch (error =>{
        next (error)
    })
  })

//   router.post ("/auth",checkJWT ,(req,res,next) => {
//     User.findByPk(req.user.id)
//     .then (user => res.send(user))
//     .catch(next())
//     })

router.put ("/:id",/* checkJWT, */(req,res,next)=>{
    User.findByPk(req.params.id)
    .then (user =>{
        user.update(req.body)
    })
    .then (()=>{
        res.send("Usuario actualizado")
    })
    .catch (error =>{
        next (error)
    })
})

router.get ("/",/* checkJWT,isAdmin, */(req,res,next) => {
    User.findAll()
    .then (users => {
        res.send (users)
    })
    .catch (error =>{
        next (error)
    })
})

router.get ("/search/:query",/* checkJWT,isAdmin, */(req,res,next) => {
    console.log(req.params.query)
    User.findOne({
        where:{
            name:{
                [Op.like]: req.params.query
            }
        }
    })
    .then (users => {
        res.send (users)
    })
    .catch (error =>{
        next (error)
    })
})


router.delete ("/:id",checkJWT,isAdmin, (req,res,next)=>{
    Producto.destroy ({
        where: {
            id: req.params.id
        }
    })
    .then (()=>{
        res.send ("Producto eliminado")
    })
    .catch (error =>{
        next (error)
    })
})

router.put ("/:id",checkJWT,isAdmin,(req,res,next)=>{
    User.findByPk(req.params.id)
    .then (user =>{
        user.update({isAdmin: true})
    })
    .then (()=>{
        res.send("Usuario actualizado")
    })
    .catch (error =>{
        next (error)
    })
})


module.exports = router
