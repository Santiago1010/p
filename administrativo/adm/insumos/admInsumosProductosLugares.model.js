'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'adm_insumos_productos_lugares';
const MODEL_NAME = 'admInsumosProductosLugares';

const Schema = {
  idProductoLugar: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'id_producto_lugar',
  },
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_producto',
  },
  idLugar: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_lugar',
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
    field: 'updated_at',
  },
  deletedAt: {
    type: DataTypes.DATE,
    defaultValue: null,
    allowNull: true,
    field: 'deleted_at',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.admInsumosProductos, {
      foreignKey: 'idProducto',
      as: 'producto',
    });
    this.belongsTo(models.admInsumosLugares, {
      foreignKey: 'idLugar',
      as: 'lugar',
    });
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
