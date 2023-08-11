'use strict';
const { Model, DataTypes } = require('sequelize');
//const config = require('../../../config');

const TABLE_NAME = 'adm_empleados_contrato_anexos';
const MODEL_NAME = 'admEmpleadosContratoAnexos';

const Schema = {
  idAnexo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'id_anexo',
  },
  idContrato: {
    type: DataTypes.STRING(80),
    allowNull: false,
    field: 'id_contrato',
  },
  modAnexo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'mod_anexo',
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    field: 'updated_at',
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'deleted_at',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.admEmpleadosContrato, {
      foreignKey: 'idContrato',
      as: 'contrato',
    });
    this.belongsTo(models.admContratosModelos, {
      foreignKey: 'modAnexo',
      as: 'modeloAnexo',
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
