'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');

const TABLE_NAME = 'web_cursos_comunidad_comentarios';
const MODEL_NAME = 'webCursosComunidadComentarios';

const Schema = {
  idCursoComunidadComentario: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_curso_comunidad_comentario',
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
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_usuarios',
      key: 'id_usuario',
    },
    field: 'id_usuario',
  },
  comentario: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webUsuarios, { as: 'usuario', foreignKey: 'idUsuario' });
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
