const { sequelize } = require(".")

const userSolves = (Sequelize, Datatypes) => {
  const model = Sequelize.define("user_solves", 
    {
      user_solves_pk : {
        type : Datatypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
      },
      user_solve : {
        type : Datatypes.TEXT('long'),
        allowNull : false
      },
      solved : {
        type : Datatypes.TINYINT,
        allowNull : false,
        defaultValue : 0,
      },
      submit_time : {
        type : Datatypes.DATE,
        allowNull : false,
        defaultValue : Sequelize.literal('now()')
      }
    },
    {
      tableName : 'user_solves',
      freezeTableName : true,
      timestamps : false,
    }
  )
}

module.exports = userSolves