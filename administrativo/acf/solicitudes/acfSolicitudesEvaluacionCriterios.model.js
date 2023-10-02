'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_solicitudes_evaluacion_criterios';
const MODEL_NAME = 'acfSolicitudesEvaluacionCriterios';

const Schema = {
  idCriterioEvalua: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_criterio_evalua',
  },
  nombre: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  idArea: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'acf_areas',
      key: 'id_area',
    },
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
    this.hasMany(models.acfSolicitudesEvaluacion, {
      as: 'evaluaciones',
      foreignKey: 'idCriterio',
    });
    this.belongsTo(models.acfAreas, { as: 'area', foreignKey: 'idArea' });
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
