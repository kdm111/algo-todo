const problemImages = function (Sequelize, DataTypes) {
  const model = Sequelize.define("problem_images",
    {
      problem_images_pk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      problem_images_url: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      tableName: 'problem_images',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return model;
}
module.exports = problemImages