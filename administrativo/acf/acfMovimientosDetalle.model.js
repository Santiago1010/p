'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_movimientos_detalle';
const MODEL_NAME = 'acfMovimientosDetalle';

const Schema = {
  idMovimientoDetalle: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_movimiento_detalle',
  },
  idMovimiento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_movimientos',
      key: 'id_movimiento',
    },
    field: 'id_movimiento',
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
    this.belongsTo(models.acfEquipos, { as: 'equipo', foreignKey: 'idEquipo' });
    this.belongsTo(models.acfMovimientos, { as: 'movimiento', foreignKey: 'idMovimiento' });
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
