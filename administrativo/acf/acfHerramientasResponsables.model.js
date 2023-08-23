'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_herramientas_responsables';
const MODEL_NAME = 'acfHerramientasResponsables';

const Schema = {
  idAsignacion: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_asignacion',
  },
  idHerramienta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_herramientas',
      key: 'id_herramienta',
    },
    field: 'id_herramienta',
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
