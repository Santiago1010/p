'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_centros_costos';
const MODEL_NAME = 'ctbCentrosCostos';

const Schema = {
  idCentroCosto: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_centro_costo',
  },
  codigo: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: 'codigo',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
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
    this.hasMany(models.webSuscripcionesEgresos, { as: 'suscripcionesEgresos', foreignKey: 'idCentroCosto' });
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
