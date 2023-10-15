module.exports = (Sequelize, Datatypes) => {
  const solves = Sequelize.define("solves", 
    {
      solves_pk : {
        type : Datatypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
      },
      solve : {
        type : Datatypes.TEXT('long'),
        allowNull : false
      },
      solved : {
        type : Datatypes.BOOLEAN,
        allowNull : false,
        defaultValue : 0,
      },
      submit_time : {
        type : Datatypes.DATE,
        allowNull : false,
        defaultValue : Datatypes.NOW
      }
    },
    {
      tableName : 'solves',
      freezeTableName : true,
      timestamps : false,
    }
  )
  solves.associate = (models) => {
    solves.belongsTo(models.users, {
      foreignKey : {
        name : 'user_pk',
        allowNull : false
      }
    })
  }
  return solves
}

