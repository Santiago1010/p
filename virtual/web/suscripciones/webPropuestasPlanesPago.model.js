'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_propuestas_planes_pago';
const MODEL_NAME = 'webPropuestasPlanesPago';

const Schema = {
  idPlan: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_plan',
  },
  idHistorial: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_suscripciones_propuestas_historial',
      key: 'id_historial',
    },
    unique: 'web_propuestas_planes_pago_id_historial_foreign_idx',
    field: 'id_historial',
  },
  observacion: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  aplicaIva: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    field: 'aplica_iva',
  },
  interesMora: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    field: 'interes_mora',
  },
  descuento: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  abogado: {
    type: DataTypes.BOOLEAN,
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
    this.hasMany(models.webPropuestasPlanesPagoCuotas, { as: 'cuotas', foreignKey: 'idPlan' });
    this.hasMany(models.webPropuestasPlanesPagoSeguimiento, {
      as: 'seguimientos',
      foreignKey: 'idPlan',
    });
    this.belongsTo(models.webSuscripcionesPropuestasHistorial, {
      as: 'historial',
      foreignKey: 'idHistorial',
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
