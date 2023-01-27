'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones_lineas';
const MODEL_NAME = 'webSuscripcionesLineas';

const Schema = {
  idLinea: {
    field: 'id_suscripcion',
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    field: 'nombre_linea',
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.webSuscripciones, { as: 'suscripciones', foreignKey: 'idLinea' });
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
