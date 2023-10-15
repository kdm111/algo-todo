module.exports = function (Sequelize, DataTypes) {
  const problemImages = Sequelize.define("problem_images",
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
      },
    },
    {
      tableName: 'problem_images',
      freezeTableName: true,
      timestamps: false,
    }
  );
  problemImages.associate = (models) => {
    problemImages.belongsTo(models.problems, {
      foreignKey : {
        name : 'problem_pk',
        allowNull : false
      }
    })
  }
  return problemImages;
}