'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_caja_menor_ingresos';
const MODEL_NAME = 'ctbCajaMenorIngresos';

const Schema = {
  idIngreso: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_ingreso',
  },
  idCajaMenor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_caja_menor',
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  observacion: {
    type: DataTypes.STRING(450),
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('nuevo', 'aprobado', 'denegado'),
    allowNull: false,
    defaultValue: 'nuevo',
  },
  idEmpleado: {
    type: DataTypes.STRING(30),
    allowNull: false,
    field: 'id_empleado',
  },
  idEmpleadoAutoriza: {
    type: DataTypes.STRING(30),
    allowNull: true,
    field: 'id_empleado_autoriza',
  },
  fechaAutoriza: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_autoriza',
  },
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_fin',
  },
  fechaLimite: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_limite',
  },
  valorAprobado: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    field: 'valor_aprobado',
  },
  observacionDenegado: {
    type: DataTypes.STRING(500),
    allowNull: true,
    field: 'observacion_denegado',
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
    this.belongsTo(models.ctbCajaMenor, {
      foreignKey: 'idCajaMenor',
      as: 'cajaMenor',
    });
    this.belongsTo(models.admEmpleados, {
      foreignKey: 'idEmpleado',
      as: 'solicitante',
    });
    this.belongsTo(models.admEmpleados, {
      foreignKey: 'idEmpleadoAutoriza',
      as: 'empleadoAutoriza',
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
