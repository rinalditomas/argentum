const express = require ('express')
const router = express.Router()
const userRouter = require('./users')
const productoRouter = require('./products')

// router.use("/users", userRouter)
router.use("/products", productoRouter)
router.use("/", productoRouter)


module.exports = router