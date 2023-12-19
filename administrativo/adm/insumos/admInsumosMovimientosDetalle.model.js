'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'adm_insumos_movimientos_detalle';
const MODEL_NAME = 'admInsumosMovimientosDetalle';

const Schema = {
  idMovimientoDetalle: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'id_movimiento_detalle',
  },
  idMovimiento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_movimiento',
  },
  idLugarDestino: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_lugar_destino',
  },
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_producto',
  },
  cantidad: {
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
    this.belongsTo(models.admInsumosMovimientos, {
      foreignKey: 'idMovimiento',
      as: 'movimiento',
    });
    this.belongsTo(models.admInsumosLugares, {
      foreignKey: 'idLugarDestino',
      as: 'lugarDestino',
    });
    this.belongsTo(models.admInsumosProductos, {
      foreignKey: 'idProducto',
      as: 'producto',
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
