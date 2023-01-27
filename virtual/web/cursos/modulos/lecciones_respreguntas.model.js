'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_cursos_modulos_lecciones_respreguntas';
const MODEL_NAME = 'webCursosModulosLeccionesRespreguntas';

const Schema = {
  idLeccionesRespreguntas: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_lecciones_respreguntas',
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_usuarios',
      key: 'id_usuario',
    },
    field: 'id_usuario',
    unique: 'web_cursos_modulos_lecciones_respreguntas_UN',
  },
  idLeccion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_cursos_modulos_lecciones',
      key: 'id_curso_modulo_leccion',
    },
    field: 'id_leccion',
    unique: 'web_cursos_modulos_lecciones_respreguntas_UN',
  },
  idPregunta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'test_preguntas',
      key: 'codpre',
    },
    field: 'id_pregunta',
  },
  idOpcion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'test_opciones',
      key: 'id',
    },
    field: 'id_opcion',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webCursosModulosLecciones, { as: 'leccion', foreignKey: 'idLeccion' });
    this.belongsTo(models.testOpciones, { as: 'opcion', foreignKey: 'idOpcion' });
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
