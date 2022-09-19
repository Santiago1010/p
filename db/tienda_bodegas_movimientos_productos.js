const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_bodegas_movimientos_productos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_productos',
        key: 'id'
      }
    },
    id_movimiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_bodegas_movimientos',
        key: 'id'
      }
    },
    origen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_productos_bodega',
        key: 'id'
      }
    },
    destino: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_productos_bodega',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tienda_bodegas_movimientos_productos',
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
        name: "FK_tienda_bodegas_movimientos_productos",
        using: "BTREE",
        fields: [
          { name: "id_producto" },
        ]
      },
      {
        name: "FK_tienda_bodegas_movimientos_bodegas_movimientos",
        using: "BTREE",
        fields: [
          { name: "id_movimiento" },
        ]
      },
      {
        name: "FK_tienda_bodegas_movimientos_productos_bodega",
        using: "BTREE",
        fields: [
          { name: "origen" },
        ]
      },
      {
        name: "FK_tienda_bodegas_movimientos_productos_bodega_2",
        using: "BTREE",
        fields: [
          { name: "destino" },
        ]
      },
    ]
  });
};
