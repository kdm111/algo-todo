const problemImages = require("./problemImages")

module.exports = function (Sequelize, DataTypes) {
  const problems = Sequelize.define("problems",
    {
      problem_pk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      problem: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      }
    },
    {
      tableName: 'problems',
      freezeTableName: true,
      timestamps: false,
    }
  )
  problems.associate = (models) => {
    problems.hasMany(models.problemImages, {
      foreignKey : {
        name : 'problem_images_pk',
      }
    })
    problems.belongsTo(models.categories, {
      foreignKey : {
        name : 'categories_pk',
        allowNull : false,
      }
    })
    problems.belongsToMany(models.answers, {
      foreignKey : {
        name : 'answer_id',
        allowNull : false
      },
      through : {
        model : 'problemAnswer'
      }
    })
  }
  return problems
}