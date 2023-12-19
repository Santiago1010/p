'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_empresas_test_recomendaciones';
const MODEL_NAME = 'webEmpresasTestRecomendaciones';

const Schema = {
  idEmpresaRecomendacionTest: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_empresa_recomendacion_test',
  },
  idRecomendacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'test_recomendaciones',
      key: 'id',
    },
    field: 'id_test_ recomendacion',
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
  rolEmpresa: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_empresas_roles',
      key: 'id',
    },
    field: 'id_rol_usuario_empresa',
  },
  estado: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  addusr: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fchadd: {
    type: DataTypes.DATE,
    allowNull: false,
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
