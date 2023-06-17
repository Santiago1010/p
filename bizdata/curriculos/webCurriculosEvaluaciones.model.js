'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_curriculos_evaluaciones';
const MODEL_NAME = 'webCurriculosEvaluaciones';

const Schema = {
  idEvaluacion: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_evaluacion',
  },
  idTest: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'test_general',
      key: 'id',
    },
    field: 'id_test',
  },
  idSuscripcionCurriculo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_suscripciones_curriculos',
      key: 'id_suscripcion_curriculo',
    },
    field: 'id_suscripcion_curriculo',
  },
  tipo: {
    type: DataTypes.ENUM('seguimiento', 'referencia'),
    allowNull: false,
    defaultValue: 'seguimiento',
  },
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'fecha_fin',
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
    this.belongsTo(models.testGeneral, { as: 'testGeneral', foreignKey: 'idTest' });
    this.belongsTo(models.webSuscripcionesCurriculos, {
      as: 'suscripcionCurriculo',
      foreignKey: 'idSuscripcionCurriculo',
    });

    this.hasMany(models.webCurriculosEvaluacionesResgeneral, {
      as: 'respuestas',
      foreignKey: 'idEvaluacion',
    });
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
