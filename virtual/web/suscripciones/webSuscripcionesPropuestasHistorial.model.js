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
  valor: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: true,
  },
  iva: {
    type: DataTypes.DECIMAL(4, 3),
    allowNull: true,
    comment: 'Iva en porcentaje',
  },
  total: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: true,
    comment: 'Total con iva',
  },
  totalLicencias: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    comment: 'Total de licencias',
    field: 'total_licencias',
  },
  licenciasAnteriores: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    comment: 'Total de licencias anteriores',
    field: 'licencias_anteriores',
  },
  idSuscripcion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Id de la suscripción a la que se le agregan licencias',
    references: {
      model: 'web_suscripciones',
      key: 'id_suscripcion',
    },
    field: 'id_suscripcion',
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
    this.belongsTo(models.webSuscripciones, { as: 'suscripcion', foreignKey: 'idSuscripcion' });
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
