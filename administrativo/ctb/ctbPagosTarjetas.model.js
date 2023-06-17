'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_pagos_tarjetas';
const MODEL_NAME = 'ctbPagosTarjetas';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(80),
    allowNull: true,
  },
  activo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 1,
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.webPropuestasPlanesPagoCuotas, { as: 'cuotas', foreignKey: 'idTarjeta' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: MODEL_NAME,
      timestamps: false,
    };
  }
}

module.exports = { Schema, ExtendedModel };
