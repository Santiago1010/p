'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_cursos_modulos_lecciones';
const MODEL_NAME = 'webCursosModulosLecciones';

const Schema = {
  idLeccion: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_curso_modulo_leccion',
  },
  idModulo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_cursos_modulos',
      key: 'id_curso_modulo',
    },
    field: 'id_curso_modulo',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'nombre_leccion',
  },
  descripcion: {
    type: DataTypes.STRING(300),
    allowNull: true,
    field: 'descripcion_leccion',
  },
  tipoRecurso: {
    type: DataTypes.ENUM('Video', 'Audio', 'Parrafo', 'Test'),
    field: 'tipo_recurso_leccion',
  },
  recurso: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'recurso_leccion',
  },
  tiempo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'tiempo_leccion',
  },
  orden: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'orden_leccion',
  },
  testCodpre: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'test_codpre',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webCursosModulos, { as: 'modulo', foreignKey: 'idModulo' });
    this.belongsTo(models.testPreguntas, { as: 'pregunta', foreignKey: 'testCodpre' });

    this.hasMany(models.webCursosModulosLeccionesMateriales, { as: 'materiales', foreignKey: 'idLeccion' });
    this.hasMany(models.webCursosModulosLeccionesParrafos, { as: 'parrafos', foreignKey: 'idLeccion' });

    this.hasMany(models.webCursosModulosLeccionesRespreguntas, { as: 'resPreguntas', foreignKey: 'idLeccion' });

    this.hasMany(models.webCursosQuiz, { as: 'quiz', foreignKey: 'idLeccion' });
    this.hasOne(models.webCursosProgresoUsuarios, { as: 'progresoUsuario', foreignKey: 'idLeccion' });
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
