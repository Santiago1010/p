'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_cursos_progreso_empresa_usuarios';
const MODEL_NAME = 'webCursosProgresoEmpresaUsuarios';

const Schema = {
  idProgresoEmpresaUsuarios: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_progreso_empresa_usuarios',
  },
  idCursoProgresoUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_cursos_progreso_usuarios',
      key: 'id_curso_progreso_usuario',
    },
    unique: 'web_cursos_progreso_empresa_usuarios_FK_1',
    field: 'id_curso_progreso_usuario',
  },
  idEmpresa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_empresas',
      key: 'id_empresa',
    },
    field: 'id_empresa',
  },
};

class ExtendedModel extends Model {
  static associate(models) {}

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
