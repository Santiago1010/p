'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'pla_criterios';
const MODEL_NAME = 'plaCriterios';

const Schema = {
  idCriterio: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_criterio',
  },
  descripcion: {
    type: DataTypes.STRING(150),
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
    this.hasMany(models.plaIndicadores, { as: 'indicadores', foreignKey: 'idCriterio' });
    this.hasMany(models.plaEvaluacionesCriterioPuntaje, {
      as: 'evaluacionesPuntaje',
      foreignKey: 'idCriterio',
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
