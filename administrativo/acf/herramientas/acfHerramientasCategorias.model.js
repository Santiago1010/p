'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_herramientas_categorias';
const MODEL_NAME = 'acfHerramientasCategorias';

const Schema = {
  idCategoria: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_categoria',
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
    this.hasMany(models.acfHerramientas, { as: 'herramientas', foreignKey: 'idCategoria' });
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