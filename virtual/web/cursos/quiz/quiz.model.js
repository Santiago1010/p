'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_cursos_quiz';
const MODEL_NAME = 'webCursosQuiz';

const Schema = {
  idQuiz: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_quiz',
  },
  idCurso: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_cursos',
      key: 'id_curso',
    },
    field: 'id_curso',
  },
  idLeccion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_cursos_modulos_lecciones',
      key: 'id_curso_modulo_leccion',
    },
    field: 'id_curso_modulo_leccion',
  },
  idTestGeneral: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'test_general',
      key: 'id',
    },
    field: 'id_test_general',
  },
  tiempo: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  preguntasVisibles: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'preguntas_visibles',
  },
  puntajeMinimo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'puntaje_minimo',
  },
  puntajeMaximo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'puntaje_maximo',
  },
  puntajeAprobacion: {
    type: DataTypes.DECIMAL(10, 0),
    allowNull: true,
    field: 'puntaje_aprobacion',
  },
  esquema: {
    type: DataTypes.ENUM('unicas', 'variables'),
    allowNull: false,
    field: 'esquema_pregunta',
  },
  addusr: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  addfch: {
    type: DataTypes.DATE,
    allowNull: true,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.testGeneral, { as: 'testGeneral', foreignKey: 'idTestGeneral' });
    this.belongsTo(models.webCursosModulosLecciones, { as: 'leccion', foreignKey: 'idLeccion' });
    this.belongsTo(models.webCursos, { as: 'curso', foreignKey: 'idCurso' });

    this.hasMany(models.webCursosQuizResgeneral, { as: 'respuestas', foreignKey: 'idQuiz' });
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
