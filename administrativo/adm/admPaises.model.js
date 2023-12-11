'use strict';
const { Model, DataTypes } = require('sequelize');
//const config = require('../../../config');

const TABLE_NAME = 'adm_paises';
const MODEL_NAME = 'admPaises';

const Schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  codigo: {
    type: DataTypes.STRING(2),
    allowNull: false,
    unique: true,
    field: 'Codigo',
  },
  codigoDian: {
    type: DataTypes.STRING(5),
    allowNull: true,
    unique: true,
    field: 'codigo_dian',
  },
  pais: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'Pais',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.admEmpleados, { foreignKey: 'paisNacimiento', as: 'empleados' });
    this.hasMany(models.admCiudades, { foreignKey: 'paisesCodigo', as: 'ciudades' });
    this.hasMany(models.admDepartamentos, { foreignKey: 'idPais', as: 'departamentos' });
    this.hasMany(models.ctbProveedores, { as: 'proveedores', foreignKey: 'idPais' });
    this.hasMany(models.webEmpresas, { as: 'empresas', foreignKey: 'idPais' });
    this.hasMany(models.webSuscripciones, { as: 'suscripciones', foreignKey: 'idPais' });
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
