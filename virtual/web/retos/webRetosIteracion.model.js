'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_retos_iteracion';
const MODEL_NAME = 'webRetosIteracion';

const Schema = {
  idRetoIteracion: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_reto_iteracion',
  },
  idReto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_retos',
      key: 'id_reto',
    },
    unique: 'web_retos_iteracion_ibfk_1',
    field: 'id_reto',
  },
  numeroIteraciones: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'numero_iteraciones',
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webRetos, { as: 'reto', foreignKey: 'idReto' });
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
