'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_compras_ordenes_entrega_detalle';
const MODEL_NAME = 'ctbComprasOrdenesEntregaDetalle';

const Schema = {
  idDetalleEntrega: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_detalle_entrega',
  },
  idOrdenEntrega: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_orden_entrega',
  },
  idSolicitudItem: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_solicitud_item',
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
    this.belongsTo(models.ctbComprasOrdenesEntrega, {
      foreignKey: 'idOrdenEntrega',
      as: 'ordenEntrega',
    });
    this.belongsTo(models.ctbComprasSolicitudesDetalle, {
      foreignKey: 'idSolicitudItem',
      as: 'solicitudDetalle',
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
