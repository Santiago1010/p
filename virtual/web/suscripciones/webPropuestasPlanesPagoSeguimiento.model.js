'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_propuestas_planes_pago_seguimiento';
const MODEL_NAME = 'webPropuestasPlanesPagoSeguimiento';

const Schema = {
  idSeguimiento: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_seguimiento',
  },
  idPlan: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_propuestas_planes_pago',
      key: 'id_plan',
    },
    field: 'id_plan',
  },
  tipoContacto: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'tipo_contacto',
  },
  respuesta: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  observacion: {
    type: DataTypes.STRING(300),
    allowNull: true,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
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
    this.belongsTo(models.webPropuestasPlanesPago, { as: 'planPago', foreignKey: 'idPlan' });
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
