'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_rutas_aprendizaje_cursos';
const MODEL_NAME = 'webRutasAprendizajeCursos';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_ruta_aprendizaje_curso',
  },
  idCurso: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_cursos',
      key: 'id_curso',
    },
    field: 'id_curso',
  },
  idRutaAprendizaje: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_rutas_aprendizaje',
      key: 'id_ruta_aprendizaje',
    },
    field: 'id_ruta_aprendizaje',
  },
  orden: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
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
