'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_cursos_certificados';
const MODEL_NAME = 'webCursosCertificados';

const Schema = {
  idCursoCertificado: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_curso_certificado',
  },
  idCurso: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_cursos',
      key: 'id_curso',
    },
    field: 'id_curso',
    unique: 'web_cursos_certificados_UN',
  },
  idCertificado: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_certificados',
      key: 'id_certificado',
    },
    field: 'id_certificado',
    unique: 'web_cursos_certificados_UN',
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
    this.belongsTo(models.webCursos, { as: 'curso', foreignKey: 'idCurso' });
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
