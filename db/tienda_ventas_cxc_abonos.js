const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_ventas_cxc_abonos', {
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
      allowNull: false,
      references: {
        model: 'tienda_ventas',
        key: 'id'
      }
    },
    id_cxc: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_ventas_cxc',
        key: 'id'
      }
    },
    descuento: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    abono: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    pendiente: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    control: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    respuesta: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tienda_ventas_cxc_abonos',
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
        name: "FK_tienda_ventas_cxc_abonos_tienda_ventas",
        using: "BTREE",
        fields: [
          { name: "id_venta" },
        ]
      },
      {
        name: "FK_tienda_ventas_cxc_abonos_tienda_ventas_cxc",
        using: "BTREE",
        fields: [
          { name: "id_cxc" },
        ]
      },
      {
        name: "FK_tienda_ventas_cxc_abonos_tienda_ventas_caja",
        using: "BTREE",
        fields: [
          { name: "id_caja" },
        ]
      },
    ]
  });
};
