module.exports = function (Sequelize, DataTypes) {
  const users = Sequelize.define("users",
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
  )
  users.associate = (models) => {
    users.hasMany(models.solves, {
      foreignKey : {
        name : 'solves_pk'
      }
    })
  }
  return users;
}