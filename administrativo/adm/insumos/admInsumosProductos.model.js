'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../../../../config');

const TABLE_NAME = 'adm_insumos_productos';
const MODEL_NAME = 'admInsumosProductos';

const Schema = {
  idProducto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'id_producto',
  },
  idCategoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'admInsumosProductosCategorias',
      key: 'idCategoria',
    },
    field: 'id_categoria',
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING(350),
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
  presentacion: {
    type: DataTypes.ENUM('caja', 'unidad'),
    allowNull: false,
    defaultValue: 'unidad',
  },
  stockMinimo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: 'stock_minimo',
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
    this.belongsTo(models.admInsumosProductosCategorias, {
      foreignKey: 'idCategoria',
      as: 'categoria',
    });
    this.hasMany(models.admInsumosOrdenesDetalle, {
      foreignKey: 'idProducto',
      as: 'ordenDetalles',
    });
    this.hasMany(models.admInsumosInventariosDetalle, {
      foreignKey: 'idProducto',
      as: 'inventarioDetalles',
    });
    this.hasMany(models.admInsumosMovimientosDetalle, {
      foreignKey: 'idProducto',
      as: 'movimientoDetalles',
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
