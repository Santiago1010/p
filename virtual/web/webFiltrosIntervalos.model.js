'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_filtros_intervalos';
const MODEL_NAME = 'webFiltrosIntervalos';

const Schema = {
  idIntervalo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_intervalo',
  },
  nombreIntervalo: {
    type: DataTypes.STRING(80),
    allowNull: false,
    field: 'nombre_intervalo',
  },
  intervalo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};
class ExtendedModel extends Model {
  static associate(models) {}

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
