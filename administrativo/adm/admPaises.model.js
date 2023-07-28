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
    // this.hasMany(models.admEmpleados, { foreignKey: 'id', as: 'empleados' });
    // this.hasMany(models.admCiudades, { foreignKey: 'id', as: 'ciudades' });
    //this.hasMany(models.admDepartamentos, { foreignKey: 'id', as: 'departamentos' });
    //this.hasMany(models.ctbProveedores, { foreignKey: 'id', as: 'proveedores' });
    //this.hasMany(models.matriculasFamiliares, { foreignKey: 'id', as: 'matriculasFamiliares' });
    // this.hasMany(models.webEmpresas, { foreignKey: 'id', as: 'empresas' });
    // this.hasMany(models.webInstructores, { foreignKey: 'id', as: 'instructores' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: MODEL_NAME,
    };
  }
}

module.exports = { Schema, ExtendedModel };
