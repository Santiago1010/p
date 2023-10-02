'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_solicitudes_ordenes';
const MODEL_NAME = 'acfSolicitudesOrdenes';

const Schema = {
  idSolicitudOrden: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_solicitud_orden',
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
  tipo: {
    type: DataTypes.ENUM('interno', 'externo'),
    allowNull: false,
    defaultValue: 'interno',
    comment: 'Tipo de persona ejecutar la orden',
  },
  idEmpleadoGenera: {
    type: DataTypes.STRING(30),
    allowNull: false,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado_genera',
  },
  idEmpleadoEjecuta: {
    type: DataTypes.STRING(30),
    allowNull: true,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado_ejecuta',
  },
  idProveedor: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ctb_proveedores',
      key: 'id',
    },
    field: 'id_proveedor',
  },
  prioridad: {
    type: DataTypes.ENUM('alto', 'medio', 'bajo'),
    allowNull: false,
    defaultValue: 'medio',
    comment: 'prioridad de la orden',
  },
  estado: {
    type: DataTypes.ENUM('nueva', 'progeso', 'finalizado'),
    allowNull: false,
    defaultValue: 'nueva',
    comment: 'Estado de la orden de trabajo',
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
    this.hasMany(models.acfSolicitudesOrdenesDetalle, { as: 'detalles', foreignKey: 'idSolicitudOrden' });
    this.belongsTo(models.admEmpleados, { as: 'empleadoGenera', foreignKey: 'idEmpleadoGenera' });
    this.belongsTo(models.admEmpleados, { as: 'empleadoEjecuta', foreignKey: 'idEmpleadoEjecuta' });
    this.belongsTo(models.ctbProveedores, { as: 'proveedor', foreignKey: 'idProveedor' });
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
