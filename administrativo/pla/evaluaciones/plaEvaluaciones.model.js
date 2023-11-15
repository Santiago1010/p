'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'pla_evaluaciones';
const MODEL_NAME = 'plaEvaluaciones';

const Schema = {
  idEvaluacion: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_evaluacion',
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(650),
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
  static associate(models) {
    this.hasMany(models.plaEvaluacionesConfiguracion, {
      as: 'evaluacionesConfiguracion',
      foreignKey: 'idEvaluacion',
    });
    this.hasMany(models.plaEvaluacionesCriterioPuntaje, {
      as: 'evaluacionesPuntaje',
      foreignKey: 'idEvaluacion',
    });
    this.belongsToMany(models.plaCriterios, {
      through: { model: models.plaEvaluacionesCriterioPuntaje },
      as: 'criterios',
      foreignKey: 'idEvaluacion',
    });
    this.hasMany(models.plaEvaluacionesIndicadores, {
      as: 'evaluacionesIndicadores',
      foreignKey: 'idEvaluacion',
    });
    this.belongsToMany(models.plaIndicadores, {
      through: { model: models.plaEvaluacionesIndicadores },
      as: 'indicadores',
      foreignKey: 'idEvaluacion',
    });
    this.hasMany(models.plaEvaluacionesResponsables, {
      as: 'evaluacionesResponsables',
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
