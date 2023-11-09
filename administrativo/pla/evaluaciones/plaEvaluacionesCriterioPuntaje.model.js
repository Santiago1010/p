'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'pla_evaluaciones_criterio_puntaje';
const MODEL_NAME = 'plaEvaluacionesCriterioPuntaje';

const Schema = {
  idConfCriterio: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_conf_criterio',
  },
  idCriterio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pla_criterios',
      key: 'id_criterio',
    },
    field: 'id_criterio',
  },
  idEvaluacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pla_evaluaciones',
      key: 'id_evaluacion',
    },
    field: 'id_evaluacion',
  },
  porcentaje: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
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
    this.belongsTo(models.plaEvaluaciones, { as: 'evaluacion', foreignKey: 'idEvaluacion' });
    this.belongsTo(models.plaCriterios, { as: 'criterio', foreignKey: 'idCriterio' });
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
