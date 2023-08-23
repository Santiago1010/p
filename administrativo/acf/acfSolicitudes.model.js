'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_solicitudes';
const MODEL_NAME = 'acfSolicitudes';

const Schema = {
  idSolicitud: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_solicitud',
  },
  idEmpleado: {
    type: DataTypes.STRING(30),
    allowNull: true,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado',
  },
  idAreaResp: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_areas_responsables',
      key: 'id_area_resp',
    },
    field: 'id_area_resp',
  },
  tipo: {
    type: DataTypes.ENUM(
      'desistalacion',
      'instalacion',
      'correctivo',
      'preventivo',
      'seguimiento',
      'predictivo',
      'capacitacion'
    ),
    allowNull: false,
    defaultValue: 'correctivo',
    comment: 'Tipo de solicitud',
  },
  descripcion: {
    type: DataTypes.STRING(350),
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('nueva', 'progreso', 'entregada', 'finalizada', 'denegada'),
    allowNull: false,
    defaultValue: 'nueva',
    comment: 'Estado de la solicitud',
  },
  justificacionDenegada: {
    type: DataTypes.STRING(500),
    allowNull: true,
    field: 'justificacion_denegada',
  },
  idPlanMantenimiento: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'acf_plan_mantenimiento',
      key: 'id_plan_mantenimiento',
    },
    field: 'id_plan_mantenimiento',
  },
  fechaPlan: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_plan',
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
  static associate(models) {}

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
