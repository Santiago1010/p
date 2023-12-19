'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../../../../config');

const TABLE_NAME = 'web_certificados_firmas';
const MODEL_NAME = 'webCertificadosFirmas';

const Schema = {
  idFirma: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_firma',
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
  autorFirma: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'autor_firma',
  },
  perfilAutorFirma: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'perfil_autor_firma',
  },
  cargoAutorFirma: {
    type: DataTypes.STRING(150),
    allowNull: true,
    field: 'cargo_autor_firma',
  },
  linkFirma: {
    type: DataTypes.STRING(150),
    allowNull: true,
    field: 'link_firma',
    get() {
      const imageLocation = this.getDataValue('linkFirma');
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
