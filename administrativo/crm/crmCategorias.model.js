'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'crm_categorias';
const MODEL_NAME = 'crmCategorias';

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
  descripcion: {
    type: DataTypes.STRING(300),
    allowNull: true,
  },
  color: {
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: '#000000',
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
    this.hasMany(models.crmCategoriasProductos, { as: 'productos', foreignKey: 'idCategoria' });
    this.hasMany(models.webSuscripciones, { as: 'suscripciones', foreignKey: 'idCategoria' });
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
