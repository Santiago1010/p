const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'ctb_proveedores_recordatorio',
    {
      idrecordatorio: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      idPago: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ctb_proveedores_pagos',
          key: 'id',
        },
      },
      estado: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'ctb_proveedores_recordatorio',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'idrecordatorio' }],
        },
        {
          name: 'Fk_recordatorio_proveedores_pagos',
          using: 'BTREE',
          fields: [{ name: 'idPago' }],
        },
      ],
    }
  );
};
