'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_bajas_detalle';
const MODEL_NAME = 'acfBajasDetalle';

const Schema = {
  idBajaDetalle: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_baja_detalle',
  },
  idBaja: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_bajas',
      key: 'id_baja',
    },
    field: 'id_baja',
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
    this.belongsTo(models.acfBajas, { as: 'acta', foreignKey: 'idBaja' });
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
