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
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
    allowNull: false,
  },
  deletedAt: {
    field: 'deleted_at',
    type: DataTypes.DATE,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.admEmpleados, {
      foreignKey: 'tipide',
      as: 'empleados',
    });
    this.hasMany(models.ctbProveedores, { as: 'proveedores', foreignKey: 'idTipoIdent' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: MODEL_NAME,
      timestamps: true,
      paranoid: true,
    };
  }
}

module.exports = { Schema, ExtendedModel };
