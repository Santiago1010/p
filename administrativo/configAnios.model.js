'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'config_anios';
const MODEL_NAME = 'configAnios';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  codigo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: 'codigo',
  },
  anio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  estadoAdmision: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: 'estado_admision',
  },
  estadoPazSalvo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: 'estado_paz_salvo',
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.plaEvaluacionesConfiguracion, { as: 'evaluacionesConfiguracion', foreignKey: 'idAnio' });
    this.hasMany(models.plaGruposUsuarios, { as: 'gruposUsuarios', foreignKey: 'idAnio' });
    this.hasMany(models.ctbProveedoresSolicitudesRecurrentes, {
      as: 'solicitudesRecurrentes',
      foreignKey: 'idAnio',
    });
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
