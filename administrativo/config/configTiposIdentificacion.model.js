'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'config_tipos_ident';
const MODEL_NAME = 'configTiposIdentificacion';

const Schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  codigo: {
    type: DataTypes.INTEGER,
    unique: true,
  },
  codigoEpayco: {
    type: DataTypes.STRING(5),
    unique: true,
    field: 'codigo_epayco',
  },
  nombre: {
    type: DataTypes.STRING(80),
    allowNull: true,
  },
  abreviatura: {
    type: DataTypes.STRING(10),
    allowNull: true,
    field: 'abv',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.admEmpleados, {
      foreignKey: 'tipide',
      as: 'empleados',
    });
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
