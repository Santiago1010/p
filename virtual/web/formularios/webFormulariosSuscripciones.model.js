'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_formularios_suscripciones';
const MODEL_NAME = 'webFormulariosSuscripciones';

const Schema = {
  idFormularioSuscripcion: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_formulario_suscripcion',
  },
  idFormulario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_formularios',
      key: 'id_formulario',
    },
    field: 'id_formulario',
  },
  idSuscripcion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_suscripciones',
      key: 'id_suscripcion',
    },
    field: 'id_suscripcion',
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
    this.belongsTo(models.webFormularios, { as: 'formulario', foreignKey: 'idFormulario' });
    this.belongsTo(models.webSuscripciones, { as: 'suscripcion', foreignKey: 'idSuscripcion' });
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
