module.exports = (Sequelize, Datatypes) => {
  const categories = Sequelize.define("categories", 
    {
      categories_pk : {
        type : Datatypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true,
      },
      kor_name : {
        type : Datatypes.STRING,
        allowNull : false
      },
      eng_name : {
        type : Datatypes.STRING,
        allowNull : false
      }
    },
    {
      tableName: 'categories',
      freezeTableName: true,
      timestamps: false,
    }
  )
  categories.associate = (models) => {
    categories.hasMany(models.problems, {
      foreignKey : {
        name : 'problem_pk',
      }
    })
  }
  return categories
}
