'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_usuarios_empresas_historial';
const MODEL_NAME = 'webUsuariosEmpresasHistorial';

const Schema = {
  idHistorial: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_historial',
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
  tipo: {
    type: DataTypes.ENUM('eliminados', 'creados'),
    allowNull: false,
    defaultValue: 'creados',
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: new Date(),
  },
  observacion: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: '',
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
