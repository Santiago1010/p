'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_certificados_patrocinadores';
const MODEL_NAME = 'webCertificadosPatrocinadores';

const Schema = {
  idPatrocinador: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_patrocinador',
  },
  idCertificado: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_certificados',
      key: 'id_certificado',
    },
    field: 'id_certificado',
  },
  linkLogoPatrocinador: {
    type: DataTypes.STRING(200),
    allowNull: true,
    field: 'link_logo_patrocinador',
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
