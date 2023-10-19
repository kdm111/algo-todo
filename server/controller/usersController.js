const {users} = require('../models')


exports.signUp = async (req, res) => {
  try {
    const {user_name} = req.body
    await users.create({user_name})
    res.status(201).send()
  } catch {
    res.status(500).send()
  }
}

exports.login = (req, res) => {
  try {
    const {user_name} = req.body
    const response = users.findOne({
      where : user_name
    })
    if (response?.dataValues) {
      res.status(200).send()
    } else {
      res.status(400).send()
    }
  } catch {
    res.status(500).send()
    
  }
  
}

exports.checkName = async (req, res) => {
  try {
    const {user_name} = req.body
    const response = users.findOne({
      where : user_name
    })
    if (response?.dataValues) {
      res.status(400).send()
    } else {
      res.status(200).send()
    }
  } catch {
    res.status(500).send()
  }
}


