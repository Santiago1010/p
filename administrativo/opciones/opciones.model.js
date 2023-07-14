'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'opciones';
const MODEL_NAME = 'Opciones';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  url: {
    type: DataTypes.STRING(80),
    allowNull: true,
  },
  urlApi: {
    type: DataTypes.STRING(80),
    allowNull: true,
    unique: 'url_api',
    field: 'url_api',
  },
  urlFront: {
    type: DataTypes.STRING(80),
    allowNull: true,
    field: 'url_front',
  },
  icono: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  depende: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'opciones',
      key: 'id',
    },
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  activo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 1,
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.Opciones, { as: 'opcionPadre', foreignKey: 'depende' });
    this.hasMany(models.Opciones, { as: 'subOpciones', foreignKey: 'depende' });
    this.hasMany(models.permisosApiOpciones, { as: 'permisos', foreignKey: 'idOpcion' });
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
