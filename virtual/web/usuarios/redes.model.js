'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_usuarios_redes';
const MODEL_NAME = 'webUsuariosRedes';

const Schema = {
  idUsuarioRed: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_usuario_red',
  },
  idRed: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_redes_sociales',
      key: 'id_red',
    },
    field: 'id_red',
    unique: 'red_usuario_UN',
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_usuarios',
      key: 'id_usuario',
    },
    field: 'id_web_usuario',
    unique: 'red_usuario_UN',
  },
  username: {
    type: DataTypes.STRING(150),
    allowNull: true,
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
