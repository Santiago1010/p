'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'biz_usuarios_opciones';
const MODEL_NAME = 'bizUsuariosOpciones';

const Schema = {
  idUsuario: {
    field: 'id_usuario',
    type: DataTypes.INTEGER,
  },
  idOpcion: {
    field: 'id_opcion',
    type: DataTypes.INTEGER,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    //asociations for sequelize
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
