'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const fs = require('fs')

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const models = fs.readdirSync(__dirname)
  .filter((file) => {
    const fileName = file.slice(0, -3)
    if (fileName !== 'index') {
      console.log(fileName)
      db[fileName] = require(`./${fileName}`)(sequelize, Sequelize)
      return fileName
    }
  }
)
models.forEach((file) => {
  const fileName = file.slice(0, -3)
  if (db[fileName].associate) {
    db[fileName].associate(db)
  }
})

module.exports = db;
