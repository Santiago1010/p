'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../../../config');

const TABLE_NAME = 'adm_eventos_generales';
const MODEL_NAME = 'admEventosGenerales';

const Schema = {
  idEvento: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_evento',
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING(150),
    allowNull: false,
    get() {
      const imageLocation = this.getDataValue('imagen');
      const hostImage = config.images.host;
      if (!imageLocation) {
        return null;
      }
      return `${hostImage}${imageLocation}`;
    },
  },
  link: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_fin',
  },
  estado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
};
class ExtendedModel extends Model {
  static associate(models) {}

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
