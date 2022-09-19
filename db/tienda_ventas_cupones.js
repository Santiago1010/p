const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_ventas_cupones', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_venta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_ventas',
        key: 'id'
      }
    },
    id_cupon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_cupones',
        key: 'id'
      }
    },
    id_caja: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_ventas_caja',
        key: 'id'
      }
    },
    descuento: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    porcentaje_descuento: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tienda_ventas_cupones',
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
        name: "FK_tienda_ventas_cupones_tienda_ventas",
        using: "BTREE",
        fields: [
          { name: "id_venta" },
        ]
      },
      {
        name: "FK_tienda_ventas_cupones_tienda_cupones",
        using: "BTREE",
        fields: [
          { name: "id_cupon" },
        ]
      },
      {
        name: "FK_tienda_ventas_cupones_tienda_ventas_caja",
        using: "BTREE",
        fields: [
          { name: "id_caja" },
        ]
      },
    ]
  });
};
