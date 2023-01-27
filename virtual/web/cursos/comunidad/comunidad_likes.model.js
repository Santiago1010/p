'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');

const TABLE_NAME = 'web_cursos_comunidad_likes';
const MODEL_NAME = 'webCursosComunidadLikes';

const Schema = {
  idCursoComunidadLike: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_curso_comunidad_like',
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_usuarios',
      key: 'id_usuario',
    },
    field: 'id_usuario',
  },
  idCursoComunidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_cursos_comunidad',
      key: 'id_curso_comunidad',
    },
    field: 'id_curso_comunidad',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webUsuarios, { as: 'usuario', foreignKey: 'idUsuario' });
    this.belongsTo(models.webCursosComunidad, { as: 'cursoComunidad', foreignKey: 'idCursoComunidad' });
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
