'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'adm_sedes';
const MODEL_NAME = 'admSedes';

const Schema = {
  codsed: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nitsed: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  nomsed: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  estsed: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  depsed: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  dirsed: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  codprm: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.Calendario, { as: 'calendarios', foreignKey: 'codsed' });
    this.hasMany(models.acfUbicaciones, { as: 'ubicaciones', foreignKey: 'idSede' });
    this.hasMany(models.webSuscripcionesPropuestas, { as: 'propuestas', foreignKey: 'idSede' });
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
