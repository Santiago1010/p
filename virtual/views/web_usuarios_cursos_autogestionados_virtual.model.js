'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_usuarios_cursos_autogestionados_virtual';
const MODEL_NAME = 'webUsuariosCursosAutogestionadosVirtual';

const Schema = {
  idUsuario: {
    field: 'id_usuario',
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  idSuscripcion: {
    field: 'id_suscripcion',
    type: DataTypes.INTEGER,
  },
  cursosAutogestionados: {
    field: 'cursos_autogestionados',
    type: DataTypes.BIGINT,
  },
  limiteCursos: {
    field: 'limite_cursos',
    type: DataTypes.INTEGER,
  },
  cursosRestantes: {
    field: 'cursos_restantes',
    type: DataTypes.BIGINT,
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
