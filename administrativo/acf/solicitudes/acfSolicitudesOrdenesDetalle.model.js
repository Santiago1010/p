'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_solicitudes_ordenes_detalle';
const MODEL_NAME = 'acfSolicitudesOrdenesDetalle';

const Schema = {
  idSolicitudOrdenDetalle: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_solicitud_orden_detalle',
  },
  idSolicitudOrden: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_solicitudes_ordenes',
      key: 'id_solicitud_orden',
    },
    field: 'id_solicitud_orden',
  },
  idSolicitudDetalle: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_solicitudes_detalle',
      key: 'id_solicitud_detalle',
    },
    unique: 'acf_solicitudes_ordenes_detalle_ibfk_2',
    field: 'id_solicitud_detalle',
  },
  diagnostico: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  trabajo: {
    type: DataTypes.STRING(500),
    allowNull: true,
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
    this.belongsTo(models.acfSolicitudesDetalle, { as: 'detalleSolicitud', foreignKey: 'idSolicitudDetalle' });
    this.belongsTo(models.acfSolicitudesOrdenes, { as: 'orden', foreignKey: 'idSolicitudOrden' });
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
