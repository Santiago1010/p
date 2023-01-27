'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'biz_roles_opciones';
const MODEL_NAME = 'bizRolesOpciones';

const Schema = {
  idRol: {
    field: 'id_rol',
    type: DataTypes.INTEGER,
  },
  idOpcion: {
    field: 'id_opcion',
    type: DataTypes.INTEGER,
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
