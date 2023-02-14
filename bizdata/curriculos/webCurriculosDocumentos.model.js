'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_curriculos_documentos';
const MODEL_NAME = 'webCurriculosDocumentos';

const Schema = {
  idDocumento: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_documento',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  tipo: {
    type: DataTypes.BLOB,
    allowNull: false,
    defaultValue: 'documento',
  },
  url: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  idCurriculo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Documento especifico de un curriculo',
    references: {
      model: 'web_curriculos',
      key: 'id_curriculo',
    },
    field: 'id_curriculo',
  },
  idSuscripcion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Documento especifico de una suscripción',
    references: {
      model: 'web_suscripciones',
      key: 'id_suscripcion',
    },
    field: 'id_suscripcion',
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webCurriculos, { as: 'curriculo', foreignKey: 'idCurriculo' });
    this.belongsTo(models.webSuscripciones, { as: 'suscripcion', foreignKey: 'idSuscripcion' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: MODEL_NAME,
      timestamps: false,
    };
  }
}

module.exports = { Schema, ExtendedModel };
