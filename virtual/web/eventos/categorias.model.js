'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_eventos_categorias';
const MODEL_NAME = 'webEventosCategorias';

const Schema = {
  idEventoCategoria: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_evento_categoria',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: '0',
    field: 'nombre_evento_categoria',
  },
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ctb_productos',
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
    this.hasMany(models.webEventos, { as: 'eventos', foreignKey: 'idCategoria' });
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
