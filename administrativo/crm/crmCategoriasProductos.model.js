'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'crm_categorias_productos';
const MODEL_NAME = 'crmCategoriasProductos';

const Schema = {
  idCategoriaProducto: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_categoria_producto',
  },
  idCategoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'crm_categorias',
      key: 'id_categoria',
    },
    field: 'id_categoria',
  },
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'crm_productos',
      key: 'id_producto',
    },
    field: 'id_producto',
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
    this.belongsTo(models.crmProductos, { as: 'producto', foreignKey: 'idProducto' });
    this.belongsTo(models.crmCategorias, { as: 'categoria', foreignKey: 'idCategoria' });
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
