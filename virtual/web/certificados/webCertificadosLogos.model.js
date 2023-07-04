'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../../../../config');

const TABLE_NAME = 'web_certificados_logos';
const MODEL_NAME = 'webCertificadosLogos';

const Schema = {
  idLogo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_logo',
  },
  idCertificado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    references: {
      model: 'web_certificados',
      key: 'id_certificado',
    },
    field: 'id_certificado',
  },
  linkLogo: {
    type: DataTypes.STRING(250),
    allowNull: false,
    defaultValue: '',
    field: 'link_logo',
    get() {
      const imageLocation = this.getDataValue('linkLogo');
      const hostImage = config.images.host;
      if (!imageLocation) {
        return null;
      }
      return `${hostImage}${imageLocation}`;
    },
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
    this.belongsTo(models.webCertificados, { as: 'certificado', foreignKey: 'idCertificado' });
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
