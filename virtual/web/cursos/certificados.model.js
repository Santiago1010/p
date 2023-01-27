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
    unique: 'FK_web_cursos_certificados_web_cursos',
    field: 'id_curso',
  },
  idCertificado: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_certificados',
      key: 'id_certificado',
    },
    unique: 'FK_web_cursos_certificados_web_certificados',
    field: 'id_certificado',
  },
  estado: {
    type: DataTypes.TINYINT.UNSIGNED,
    defaultValue: 1,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webCertificados, { as: 'certificado', foreignKey: 'idCertificado' });
    this.belongsTo(models.webCursos, { as: 'curso', foreignKey: 'idCurso' });
    this.hasMany(models.webCursosQuizResgeneral, { as: 'respuestasQuiz', foreignKey: 'idCursoCertificado' });
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
