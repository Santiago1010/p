'use strict';
const { Model, DataTypes } = require('sequelize');
//const config = require('../../../config');

const TABLE_NAME = 'adm_ciudades';
const MODEL_NAME = 'admCiudades';

const Schema = {
  idCiudad: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'idCiudades',
  },
  paisesCodigo: {
    type: DataTypes.STRING(2),
    allowNull: false,
    field: 'paises_Codigo',
  },
  ciudad: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  idDepartamento: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'id_departamento',
  },
  codigo: {
    type: DataTypes.STRING(10),
    allowNull: true,
    unique: true,
  },
  codigoControl: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'codigo_control',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.admPaises, { foreignKey: 'paisesCodigo', as: 'pais' });
    this.belongsTo(models.admDepartamentos, { foreignKey: 'idDepartamento', as: 'departamento' });
    this.hasMany(models.admEmpleados, { foreignKey: 'ciudadNacimiento', as: 'empleados' });
    // this.hasMany(models.ctbProveedores, { foreignKey: 'idCiudades', as: 'proveedores' });
    // this.hasMany(models.matriculasFamiliares, { foreignKey: 'idCiudades', as: 'matriculasFamiliares' });
    this.hasMany(models.webEmpresas, { foreignKey: 'idCiudades', as: 'empresas' });
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
