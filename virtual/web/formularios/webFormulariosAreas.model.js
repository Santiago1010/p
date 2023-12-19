'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_formularios_areas';
const MODEL_NAME = 'webFormulariosAreas';

const Schema = {
  idFormularioArea: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_formulario_area',
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
  idArea: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_empresas_areas',
      key: 'id_empresa_area',
    },
    field: 'id_area',
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
    this.belongsTo(models.webEmpresasAreas, { as: 'area', foreignKey: 'idArea' });
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
