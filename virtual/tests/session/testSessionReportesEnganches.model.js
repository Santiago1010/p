'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_session_reportes_enganches';
const MODEL_NAME = 'testSessionReportesEnganches';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  numeroEnganche: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'Número de enganche',
    unique: 'numero_enganche',
    field: 'numero_enganche',
  },
  texto: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: 'Texto de enganche',
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
