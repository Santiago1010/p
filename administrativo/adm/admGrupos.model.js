'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'adm_grupos';
const MODEL_NAME = 'admGrupos';

const Schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'id',
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  idAnio: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'config_anios',
      key: 'id',
    },
    field: 'id_anio',
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
