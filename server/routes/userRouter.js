const express = require('express')
const userRouter = express.Router()
const userController = require('../controller/usersController')

/**
 * @swagger
 * tags:
 *   name: Users
 */

userRouter.post('/signup', userController.signUp)
userRouter.get('/login', userController.login)
userRouter.post('/check', userController.checkName)


module.exports = userRouter