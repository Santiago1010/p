'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'pla_evaluaciones_responsables';
const MODEL_NAME = 'plaEvaluacionesResponsables';

const Schema = {
  idAsignacion: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_asignacion',
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
  idEmpleado: {
    type: DataTypes.STRING(30),
    allowNull: false,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado',
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
    this.belongsTo(models.admEmpleados, { as: 'responsable', foreignKey: 'idEmpleado' });
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
