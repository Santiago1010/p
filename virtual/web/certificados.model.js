'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_certificados';
const MODEL_NAME = 'webCertificados';

const Schema = {
  idCertificado: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_certificado',
  },
  nombre: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'nombre_certificado',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.webCursosCertificados, { as: 'certificadosCursos', foreignKey: 'idCertificado' });
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
