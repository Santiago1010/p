const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_bodegas_usuarios', {
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
        model: 'usuarios',
        key: 'id'
      }
    },
    id_bodega: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_bodegas',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tienda_bodegas_usuarios',
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
        name: "FK_tienda_bodegas_usuarios_usuarios",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "FK_tienda_bodegas_usuarios_tienda_bodegas",
        using: "BTREE",
        fields: [
          { name: "id_bodega" },
        ]
      },
    ]
  });
};
