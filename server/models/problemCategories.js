const problemCategories = (Sequelize, Datatypes) => {
  const model = Sequelize.define("problem_categories", 
    {
      problem_categories_pk : {
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
      tableName: 'problem_categories',
      freezeTableName: true,
      timestamps: false,
    }
  )
  return model
}
module.exports = problemCategories