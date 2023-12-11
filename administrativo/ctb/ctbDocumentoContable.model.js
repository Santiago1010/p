'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_documento_contable';
const MODEL_NAME = 'ctbDocumentoContable';

const Schema = {
  resolucion: {
    type: DataTypes.STRING(50),
    allowNull: false,
    primaryKey: true,
  },
  prefijo: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  sede: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  minimo: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  maximo: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  usados: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  activo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 1,
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
