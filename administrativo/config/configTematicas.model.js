'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'config_tematicas';
const MODEL_NAME = 'configTematicas';

const Schema = {
  idTematica: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_tematica',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(300),
    allowNull: true,
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
    this.hasMany(models.webSuscripcionesTematicas, { as: 'suscripcionesTematicas', foreignKey: 'idTematica' });
    this.belongsToMany(models.webSuscripciones, {
      through: { model: models.webSuscripcionesTematicas },
      as: 'suscripciones',
      foreignKey: 'idTematica',
    });
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
