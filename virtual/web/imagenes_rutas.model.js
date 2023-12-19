'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_imagenes_rutas';
const MODEL_NAME = 'webImagenesRutas';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  tipoCategoria: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: 'tipo_categoria',
    field: 'tipo_categoria',
  },
  url: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  forma: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.STRING(200),
    allowNull: true,
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
