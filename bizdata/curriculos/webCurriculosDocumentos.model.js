'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('./../../../config');

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
    get() {
      const tipo = this.getDataValue('tipo');
      const imageLocation = this.getDataValue('url');
      if (tipo === 'video') {
        return `${imageLocation}`;
      }

      const hostImage = config.images.host;
      if (!imageLocation) {
        return null;
      }
      return `${hostImage}${imageLocation}`;
    },
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
    this.belongsTo(models.webCurriculos, { as: 'curriculo', foreignKey: 'idCurriculo' });
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
