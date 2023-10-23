'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_empresas_publicidad';
const MODEL_NAME = 'webEmpresasPublicidad';

const Schema = {
  idPublicidad: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_publicidad',
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
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  recurso: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'fecha_fin',
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
    this.belongsTo(models.webEmpresas, { as: 'empresa', foreignKey: 'idEmpresa' });
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