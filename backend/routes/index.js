const express = require ('express')
const router = express.Router()
 const userRouter = require ('./users')
//  const Email = require ("./middlewares/confirmationMail")
const productRouter = require ('./products')
const categoryRouter = require ('./caterories')
const cartRouter = require ("./cart")
const checkJWT= require("./middlewares/jwt")
const {User} = require ('../models/index')




router.use ("/users", userRouter)
router.use ("/products", productRouter)
router.use ("/categories", categoryRouter)
router.use ("/cart",cartRouter)

router.post ("/me",checkJWT ,(req,res,next) => {
    User.findByPk(req.user.id)
    .then (user => res.send(user))
    .catch(next)
    })

module.exports = router