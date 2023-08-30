'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones_propuestas_historial';
const MODEL_NAME = 'webSuscripcionesPropuestasHistorial';

const Schema = {
  idHistorial: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_historial',
  },
  idPropuesta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_suscripciones_propuestas',
      key: 'id_suscripcion_propuesta',
    },
    field: 'id_propuesta',
  },
  descripcion: {
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: 'Descripcion pequeña del historial',
  },
  valorVenta: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    field: 'valor_venta',
  },
  totalLicencias: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'total_licencias',
  },
  fechaFin: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'fecha_fin',
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
    this.belongsTo(models.webSuscripcionesPropuestas, { as: 'propuesta', foreignKey: 'idPropuesta' });
    this.hasOne(models.webPropuestasPlanesPago, { as: 'planesPago', foreignKey: 'idHistorial' });
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
