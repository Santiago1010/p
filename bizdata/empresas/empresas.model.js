'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_empresas';
const MODEL_NAME = 'webEmpresas';

const Schema = {
  idEmpresa: {
    field: 'id_empresa',
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombreEmpresa: {
    field: 'nombre_empresa',
    type: DataTypes.STRING(100),
  },
  nitEmpresa: {
    field: 'nit_empresa',
    type: DataTypes.STRING(100),
  },
  direccionEmpresa: {
    field: 'direccion_empresa',
    type: DataTypes.STRING(100),
  },
  correoEmpresa: {
    field: 'correo_empresa',
    type: DataTypes.STRING(100),
  },
  activo: {
    type: DataTypes.INTEGER,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    //asociations for sequelize
    this.hasMany(models.bizUsuarios, { as: 'usuarios', foreignKey: 'empresaId' });
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
