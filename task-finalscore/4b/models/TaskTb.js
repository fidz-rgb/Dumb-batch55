const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TaskTb', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    collections_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_done: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'task_tb',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "task_tb_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
