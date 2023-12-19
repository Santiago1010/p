'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'biz_roles_opciones';
const MODEL_NAME = 'bizRolesOpciones';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  idRol: {
    field: 'id_rol',
    type: DataTypes.INTEGER,
  },
  idOpcion: {
    field: 'id_opcion',
    type: DataTypes.INTEGER,
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
    allowNull: false,
  },
  deletedAt: {
    field: 'deleted_at',
    type: DataTypes.DATE,
  },
};

class ExtendedModel extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: MODEL_NAME,
      timestamps: true,
      paranoid: true,
    };
  }
}

module.exports = { Schema, ExtendedModel };
