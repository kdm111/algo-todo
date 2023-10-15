module.exports = (Sequelize, DataTypes) => {
  const answers = Sequelize.define("answers", {
    answers_pk : {
      type : DataTypes.INTEGER,
      allowNull : false,
      autoIncrement : true,
      primaryKey : true,
    },
    answers : {
      type : DataTypes.TEXT,
      allowNull : false
    }},
    {
      tableName : 'answers',
      freezeTableName : false,
      timestamps : false
    }
  )
  answers.associate = (models) => {
    answers.belongsToMany(models.problems, {
      foreignKey : {
        name : 'problem_pk',
        allowNull : false,
      },
      through : {
        model : 'problemAnswer'
      }}
    )
  }
  return answers
}