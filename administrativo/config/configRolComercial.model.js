'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'config_rol_comercial';
const MODEL_NAME = 'configRolComercial';

const Schema = {
  idRolComercial: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_rol_comercial',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(300),
    allowNull: true,
  },
  comisionP: {
    type: DataTypes.DECIMAL(4, 3),
    allowNull: true,
    comment: 'Commision en porcentaje',
    field: 'comision_p',
  },
  comisionF: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: true,
    comment: 'Commision fija',
    field: 'comision_f',
  },
  contratoP: {
    type: DataTypes.DECIMAL(4, 3),
    allowNull: true,
    comment: 'Porcentaje del contrato',
    field: 'contrato_p',
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
    this.hasMany(models.webSuscripcionesPropuestas, { as: 'propuestas', foreignKey: 'idRolComercial' });
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
