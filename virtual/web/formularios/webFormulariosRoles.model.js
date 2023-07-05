'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_formularios_roles';
const MODEL_NAME = 'webFormulariosRoles';

const Schema = {
  idFormularioRol: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_formulario_rol',
  },
  idFormulario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_formularios',
      key: 'id_formulario',
    },
    field: 'id_formulario',
  },
  idRol: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_empresas_roles',
      key: 'id',
    },
    field: 'id_rol',
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
  static associate(models) {
    this.belongsTo(models.webFormularios, { as: 'formulario', foreignKey: 'idFormulario' });
    this.belongsTo(models.webEmpresasRoles, { as: 'rol', foreignKey: 'idRol' });
  }

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
