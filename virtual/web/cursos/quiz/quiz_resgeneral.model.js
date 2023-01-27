'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_cursos_quiz_resgeneral';
const MODEL_NAME = 'webCursosQuizResgeneral';

const Schema = {
  idQuizResgeneral: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_quiz_resgeneral',
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_usuarios',
      key: 'id_usuario',
    },
    field: 'id_usuario',
    unique: 'web_cursos_quiz_resgeneral_UN',
  },
  idQuiz: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_cursos_quiz',
      key: 'id_quiz',
    },
    field: 'id_quiz',
    unique: 'web_cursos_quiz_resgeneral_UN',
  },
  intentos: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 1,
  },
  puntaje: {
    type: DataTypes.DECIMAL(10, 0),
    allowNull: true,
    defaultValue: 0,
  },
  tiempo: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  aprobado: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  },
  idCursoCertificado: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'id_curso_certificado',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webCursosQuiz, { as: 'quiz', foreignKey: 'idQuiz' });
    this.belongsTo(models.webUsuarios, { as: 'usuario', foreignKey: 'idUsuario' });
    this.belongsTo(models.webCursosCertificados, { as: 'certificado', foreignKey: 'idCursoCertificado' });

    this.hasMany(models.webCursosQuizResdetalle, { as: 'resdetalle', foreignKey: 'idQuizResgeneral' });
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
