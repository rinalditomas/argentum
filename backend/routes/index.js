const express = require ('express')
const router = express.Router()
const userRouter = require ('./users')
const productRouter = require ('./products')
const cartRouter = require ("./cart")

router.use ("/users", userRouter)
router.use ("/products", productRouter)
router.use ("/", productRouter)
router.use ("/cart",cartRouter)


module.exports = router