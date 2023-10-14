const users = function (Sequelize, DataTypes) {
  const model = Sequelize.define("users",
    {
      user_pk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      }
    },
    {
      tableName: 'users',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return model;
}
module.exports = users