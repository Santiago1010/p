'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_curriculos_evaluaciones_resdetalle';
const MODEL_NAME = 'webCurriculosEvaluacionesResdetalle';

const Schema = {
  idResdetalle: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_resdetalle',
  },
  idResgeneral: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_curriculos_evaluaciones_resgeneral',
      key: 'id_resgeneral',
    },
    field: 'id_resgeneral',
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
    allowNull: true,
    comment: 'NULL preguntas abiertas',
    references: {
      model: 'test_opciones',
      key: 'id',
    },
    field: 'id_opcion',
  },
  respuesta: {
    type: DataTypes.STRING(500),
    allowNull: true,
    comment: 'NULL preguntas que no sean abiertas',
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
    allowNull: false,
  },
  deletedAt: {
    field: 'deleted_at',
    type: DataTypes.DATE,
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.testOpciones, { as: 'opcion', foreignKey: 'idOpcion' });
    this.belongsTo(models.testPreguntas, { as: 'pregunta', foreignKey: 'idPregunta' });
    this.belongsTo(models.webCurriculosEvaluacionesResgeneral, { as: 'resgeneral', foreignKey: 'idResgeneral' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: MODEL_NAME,
      timestamps: true,
      paranoid: true,
    };
  }
}

module.exports = { Schema, ExtendedModel };
