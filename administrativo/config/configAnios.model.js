'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'config_anios';
const MODEL_NAME = 'configAnios';

const Schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  codigo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  anio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estadoAdmision: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'estado_admision',
  },
  estadoPazSalvo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'estado_paz_salvo',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.admGrupos, {
      foreignKey: 'idAnio',
      as: 'grupos',
    });
    // this.hasMany(models.configPeriodo, {
    //   foreignKey: 'id',
    //   as: 'periodos',
    // });
    this.hasMany(models.plaEvaluacionesConfiguracion, {
      foreignKey: 'idAnio',
      as: 'evaluacionesConfig',
    });
    this.hasMany(models.plaGruposUsuarios, {
      foreignKey: 'idAnio',
      as: 'gruposUsuarios',
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
