'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'adm_insumos_movimientos';
const MODEL_NAME = 'admInsumosMovimientos';

const Schema = {
  idMovimiento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'id_movimiento',
  },
  idEmpleado: {
    type: DataTypes.STRING(30),
    allowNull: false,
    field: 'id_empleado',
  },
  idLugarOrigen: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_lugar_origen',
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
    this.belongsTo(models.admEmpleados, {
      foreignKey: 'idEmpleado',
      as: 'empleado',
    });
    this.belongsTo(models.admInsumosLugares, {
      foreignKey: 'idLugarOrigen',
      as: 'lugarOrigen',
    });
    this.hasMany(models.admInsumosMovimientosDetalle, {
      foreignKey: 'idMovimiento',
      as: 'detalles',
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
