'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_pagos_cuentas';
const MODEL_NAME = 'ctbPagosCuentas';

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
  numero: {
    type: DataTypes.STRING(20),
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
    this.hasMany(models.webPropuestasPlanesPagoCuotas, { as: 'cuotas', foreignKey: 'idCuenta' });
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
