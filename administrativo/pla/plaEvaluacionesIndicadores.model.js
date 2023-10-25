'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'pla_evaluaciones_indicadores';
const MODEL_NAME = 'plaEvaluacionesIndicadores';

const Schema = {
  idConfIndicador: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_conf_indicador',
  },
  idIndicador: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pla_indicadores',
      key: 'id_indicador',
    },
    field: 'id_indicador',
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
    this.belongsTo(models.plaIndicadores, { as: 'indicador', foreignKey: 'idIndicador' });
    this.belongsTo(models.plaEvaluaciones, { as: 'evaluacion', foreignKey: 'idEvaluacion' });
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
