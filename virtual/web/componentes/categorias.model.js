'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_componentes_categorias';
const MODEL_NAME = 'webComponentesCategorias';

const Schema = {
  idComponenteCategoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_componente_categoria',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'nombre_componente_categoria',
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
    this.hasMany(models.webComponentes, { as: 'componentes', foreignKey: 'idCategoria' });
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
