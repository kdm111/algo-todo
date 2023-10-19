const express = require('express')
const indexRouter = express.Router()
const userRouter = require('./userRouter.js')

indexRouter.get('/', (req, res) => {
  res.send("hello world")
})

indexRouter.use('/api/user', userRouter)

module.exports = indexRouter