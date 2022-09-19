const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_productos_bodega', {
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
    id_bodega: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_bodegas',
        key: 'id'
      }
    },
    id_grado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_grados',
        key: 'id'
      }
    },
    id_anio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_anios',
        key: 'id'
      }
    },
    id_talla: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_productos',
        key: 'id'
      }
    },
    precio1: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    precio2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    precio3: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    precio4: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    existencia: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'tienda_productos_bodega',
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
        name: "id_producto_id_bodega_id_grado_id_anio",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_producto" },
          { name: "id_bodega" },
          { name: "id_grado" },
          { name: "id_anio" },
        ]
      },
      {
        name: "FK_compra_productos_bodega_compras_productos",
        using: "BTREE",
        fields: [
          { name: "id_producto" },
        ]
      },
      {
        name: "FK_compras_productos_bodega_compras_bodegas",
        using: "BTREE",
        fields: [
          { name: "id_bodega" },
        ]
      },
      {
        name: "FK_tienda_productos_bodega_config_grados",
        using: "BTREE",
        fields: [
          { name: "id_grado" },
        ]
      },
      {
        name: "FK_tienda_productos_bodega_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
      {
        name: "FK_tienda_productos_bodega_tienda_productos",
        using: "BTREE",
        fields: [
          { name: "id_talla" },
        ]
      },
    ]
  });
};
