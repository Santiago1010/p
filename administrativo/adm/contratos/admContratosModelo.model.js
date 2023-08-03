'use strict';
const { Model, DataTypes } = require('sequelize');
//const config = require('../../../../config');

const TABLE_NAME = 'adm_contratos_modelos';
const MODEL_NAME = 'admContratosModelos';

const Schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
  anio: {
    type: DataTypes.INTEGER(4).UNSIGNED,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.ENUM('empleado', 'instructor'),
    allowNull: false,
    defaultValue: 'empleado',
  },
  tipo: {
    type: DataTypes.ENUM('contrato', 'documento'),
    allowNull: false,
    defaultValue: 'contrato',
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
    onUpdate: DataTypes.NOW,
    field: 'updated_at',
  },
  deletedAt: {
    type: DataTypes.DATE,
    defaultValue: null,
    field: 'deleted_at',
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
