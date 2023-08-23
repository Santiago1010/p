'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_solicitudes_evaluacion_criterios';
const MODEL_NAME = 'acfSolicitudesEvaluacionCriterios';

const Schema = {
  idSolicitudEvaluacion: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_solicitud_evaluacion',
  },
  idSolicitud: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_solicitudes',
      key: 'id_solicitud',
    },
    field: 'id_solicitud',
  },
  idCriterio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_solicitudes_evaluacion_criterios',
      key: 'id_criterio_evalua',
    },
    field: 'id_criterio',
  },
  valoracion: {
    type: DataTypes.INTEGER,
    allowNull: true,
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
  static associate(models) {}

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
