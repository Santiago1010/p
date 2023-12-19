'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_medios_pago';
const MODEL_NAME = 'ctbMediosPago';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
  franquicia: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  activo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.webPropuestasPlanesPagoCuotas, { as: 'cuotas', foreignKey: 'idMedioPago' });
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
