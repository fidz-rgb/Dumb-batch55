const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CollectionsTb', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'collections_tb',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "collections_tb_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
