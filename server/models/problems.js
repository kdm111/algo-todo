const problems = function (Sequelize, DataTypes) {
  const model = Sequelize.define("problems",
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
  );
  return model;
}
module.exports = problems