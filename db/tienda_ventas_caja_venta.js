const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_ventas_caja_venta', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_caja: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_ventas_caja',
        key: 'id'
      }
    },
    id_venta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_ventas',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tienda_ventas_caja_venta',
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
        name: "id_caja_id_venta",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_caja" },
          { name: "id_venta" },
        ]
      },
      {
        name: "FK_tienda_ventas_caja_venta_tienda_ventas_caja",
        using: "BTREE",
        fields: [
          { name: "id_caja" },
        ]
      },
      {
        name: "FK_tienda_ventas_caja_venta_tienda_ventas",
        using: "BTREE",
        fields: [
          { name: "id_venta" },
        ]
      },
    ]
  });
};
