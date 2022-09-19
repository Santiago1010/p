const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_medios_pago_tarjetas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_medio_pago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_medios_pago',
        key: 'id'
      }
    },
    id_tarjeta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_pagos_tarjetas',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tienda_medios_pago_tarjetas',
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
        name: "FK_tienda_medios_pago_tarjetas_tienda_medios_pago",
        using: "BTREE",
        fields: [
          { name: "id_medio_pago" },
        ]
      },
      {
        name: "FK_tienda_medios_pago_tarjetas_tienda_pagos_tarjetas",
        using: "BTREE",
        fields: [
          { name: "id_tarjeta" },
        ]
      },
    ]
  });
};
