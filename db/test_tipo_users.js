const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_tipo_users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_tipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'test_tipo',
        key: 'id'
      }
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'test_tipo_users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "test_tipo_users_FK",
        using: "BTREE",
        fields: [
          { name: "id_tipo" },
        ]
      },
      {
        name: "test_tipo_users_FK_1",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
    ]
  });
};
