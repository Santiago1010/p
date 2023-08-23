'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_plan_mantenimiento';
const MODEL_NAME = 'acfPlanMantenimiento';

const Schema = {
  idPlanMantenimiento: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_plan_mantenimiento',
  },
  idArea: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_areas',
      key: 'id_area',
    },
    field: 'id_area',
  },
  nombre: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  objetivo: {
    type: DataTypes.STRING(500),
    allowNull: false,
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
