const express = require('express')
const { swaggerUi, specs } = require('../swagger')
const indexRouter = express.Router()
const userRouter = require('./userRouter.js')

indexRouter.get('/', (req, res) => {
  res.send("hello world")
})

indexRouter.use('/user', userRouter)
indexRouter.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs))

module.exports = indexRouter