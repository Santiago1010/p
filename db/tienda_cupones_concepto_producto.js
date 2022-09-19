const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_cupones_concepto_producto', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cupon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_cupones',
        key: 'id'
      }
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_ventas_productos',
        key: 'id'
      }
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1 = usado \/ 0 = no usado "
    },
    id_anio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'config_anios',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tienda_cupones_concepto_producto',
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
        name: "tienda_cupones_concepto_producto_FK",
        using: "BTREE",
        fields: [
          { name: "id_cupon" },
        ]
      },
      {
        name: "tienda_cupones_concepto_producto_FK_2",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
      {
        name: "FK_tienda_cupones_concepto_producto_tienda_ventas_productos",
        using: "BTREE",
        fields: [
          { name: "id_producto" },
        ]
      },
    ]
  });
};
