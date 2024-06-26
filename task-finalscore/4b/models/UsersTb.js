const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UsersTb', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users_tb',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_tb_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
