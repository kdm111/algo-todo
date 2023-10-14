'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Todo = require('./Todo')(sequelize, Sequelize);
db.users = require('./users')(sequelize, Sequelize);
db.problems = require('./problems')(sequelize, Sequelize);
db.problemCategories = require('./problemCategories')(sequelize, Sequelize);
db.problemImages = require('./problemImages')(sequelize, Sequelize);
db.userSolves = require('./userSolves')(sequelize, Sequelize);





module.exports = db;
