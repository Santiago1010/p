'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_empresas_asesores';
const MODEL_NAME = 'webEmpresasAsesores';

const Schema = {
  idWebEmpresaAsesor: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_web_empresa_asesor',
  },
  nombres: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  whatsapp: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.webEmpresas, { as: 'empresas', foreignKey: 'idWebEmpresaAsesor' });
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
