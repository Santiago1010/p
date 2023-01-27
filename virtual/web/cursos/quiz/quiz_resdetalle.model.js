'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_cursos_quiz_resdetalle';
const MODEL_NAME = 'webCursosQuizResdetalle';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  idQuizResgeneral: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_cursos_quiz_resgeneral',
      key: 'id_quiz_resgeneral',
    },
    field: 'id_quiz_resgeneral',
  },
  idPregunta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'test_preguntas',
      key: 'codpre',
    },
    field: 'id_pregunta',
  },
  idOpcion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'test_opciones',
      key: 'id',
    },
    field: 'id_opcion',
  },
  puntaje: {
    type: DataTypes.DECIMAL(10, 0),
    allowNull: false,
    defaultValue: 0,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webCursosQuizResgeneral, { as: 'resGeneral', foreignKey: 'idQuizResgeneral' });
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
