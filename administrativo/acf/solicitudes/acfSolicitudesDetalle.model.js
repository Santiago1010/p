'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_solicitudes_detalle';
const MODEL_NAME = 'acfSolicitudesDetalle';

const Schema = {
  idSolicitudDetalle: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_solicitud_detalle',
  },
  idSolicitud: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_solicitudes',
      key: 'id_solicitud',
    },
    field: 'id_solicitud',
  },
  idEquipo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_equipos',
      key: 'id_equipo',
    },
    field: 'id_equipo',
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
    this.belongsTo(models.acfSolicitudes, { as: 'solicitud', foreignKey: 'idSolicitud' });
    this.belongsTo(models.acfEquipos, { as: 'equipo', foreignKey: 'idEquipo' });
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
