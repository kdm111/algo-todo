module.exports = (Sequelize, DataTypes) => {
  const problemAnswer = Sequelize.define("problemAnswer", {
    problem_answer_pk : {
      type : DataTypes.INTEGER,
      allowNull : false,
      primaryKey : true,
      autoIncrement : true
    }},
    {
      tableName : 'problem_answer',
      freezeTableName : false,
      timestamps : false
    }
  )
  return problemAnswer
}