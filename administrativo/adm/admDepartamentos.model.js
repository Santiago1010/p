'use strict';
const { Model, DataTypes } = require('sequelize');
//const config = require('../../../config');

const TABLE_NAME = 'adm_departamentos';
const MODEL_NAME = 'admDepartamentos';

const Schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  idPais: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  codigo: {
    type: DataTypes.CHAR(4),
    allowNull: false,
    unique: true,
  },
  activo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.admPaises, {
      foreignKey: 'idPais',
      as: 'pais',
    });
    this.hasMany(models.admCiudades, {
      foreignKey: 'idDepartamento',
      as: 'ciudades',
    });
    /*this.hasMany(models.matriculaFamiliares, {
      foreignKey: 'id',
      as: 'matricula',
    });*/
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
