'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_empresas_test_reportes';
const MODEL_NAME = 'webEmpresasTestReportes';

const Schema = {
  idEmpresa: {
    field: 'id_empresa',
    type: DataTypes.INTEGER,
  },
  idReporte: {
    field: 'id_session_reporte',
    type: DataTypes.INTEGER,
  },
  rolEmpresa: {
    field: 'id_rol_usuario_empresa',
    type: DataTypes.INTEGER,
  },
  estado: DataTypes.INTEGER,
  addusr: DataTypes.STRING(50),
  fchnac: DataTypes.DATE,
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
