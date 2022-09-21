const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('biz_usuarios_opciones', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'biz_usuarios',
        key: 'id'
      }
    },
    id_opcion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'biz_opciones',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'biz_usuarios_opciones',
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
        name: "id_usuario",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "id_opcion",
        using: "BTREE",
        fields: [
          { name: "id_opcion" },
        ]
      },
    ]
  });
};
