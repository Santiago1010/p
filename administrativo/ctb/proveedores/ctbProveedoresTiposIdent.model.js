'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_proveedores_tipos_ident';
const MODEL_NAME = 'ctbProveedoresTiposIdent';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  codigo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: 'codigo',
  },
  codigoEpayco: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
    field: 'codigo_epayco',
  },
  nombre: {
    type: DataTypes.STRING(70),
    allowNull: false,
  },
  abv: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  activo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.ctbProveedores, { as: 'proveedores', foreignKey: 'tipoDocumento' });
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
