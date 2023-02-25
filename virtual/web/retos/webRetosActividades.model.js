'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_retos_actividades';
const MODEL_NAME = 'webRetosActividades';

const Schema = {
  idRetoActividad: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_reto_actividad',
  },
  idReto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_retos',
      key: 'id_reto',
    },
    field: 'id_reto',
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  fechaInicio: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'fecha_fin',
  },
  link: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  ubicacion: {
    type: DataTypes.STRING(100),
    allowNull: true,
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
