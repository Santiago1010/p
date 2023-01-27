'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_eventos_recursos';
const MODEL_NAME = 'webEventosRecursos';

const Schema = {
  idEventoRecurso: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_evento_recurso',
  },
  nombre: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'nombre_recurso',
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
