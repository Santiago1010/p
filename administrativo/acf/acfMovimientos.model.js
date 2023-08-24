'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_movimientos';
const MODEL_NAME = 'acfMovimientos';

const Schema = {
  idMovimiento: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_movimiento',
  },
  idEmpleado: {
    type: DataTypes.STRING(30),
    allowNull: false,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado',
  },
  fechaHoraSalida: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'fecha_hora_salida',
  },
  fechaHoraDevolucion: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'fecha_hora_devolucion',
  },
  justificacion: {
    type: DataTypes.STRING(350),
    allowNull: false,
  },
  lugarTraslado: {
    type: DataTypes.STRING(100),
    allowNull: false,
    field: 'lugar_traslado',
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
    this.hasMany(models.acfMovimientosDetalle, { as: 'detalles', foreignKey: 'idMovimiento' });
    this.belongsTo(models.admEmpleados, { as: 'empleado', foreignKey: 'idEmpleado' });
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
