'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');

const TABLE_NAME = 'web_cursos_comunidad';
const MODEL_NAME = 'webCursosComunidad';

const Schema = {
  idCursoComunidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id_curso_comunidad',
  },
  idCurso: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_cursos',
      key: 'id_curso',
    },
    field: 'id_curso',
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
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_usuarios',
      key: 'id_usuario',
    },
    field: 'id_usuario',
  },
  contenido: {
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
    this.hasMany(models.webCursosComunidadComentarios, { as: 'comentarios', foreignKey: 'idCursoComunidad' });
    this.hasMany(models.webCursosComunidadLikes, { as: 'likes', foreignKey: 'idCursoComunidad' });
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
