'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_compras_solicitudes_detalle';
const MODEL_NAME = 'ctbComprasSolicitudesDetalle';

const Schema = {
  idSolicitudItem: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_solicitud_item',
  },
  idSolicitud: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_solicitud',
  },
  nombre: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  especificacion: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  idOrdenCompra: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'id_orden_compra',
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
    this.belongsTo(models.ctbComprasSolicitudes, {
      foreignKey: 'idSolicitud',
      as: 'solicitud',
    });
    this.belongsTo(models.ctbComprasOrdenes, {
      foreignKey: 'idOrdenCompra',
      as: 'ordenCompra',
    });
    this.hasMany(models.ctbComprasOrdenesEntregaDetalle, {
      foreignKey: 'idSolicitudItem',
      as: 'ordenesEntregaDetalle',
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
