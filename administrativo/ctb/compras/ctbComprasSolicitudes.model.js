'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_compras_solicitudes';
const MODEL_NAME = 'ctbComprasSolicitudes';

const Schema = {
  idSolicitud: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_solicitud',
  },
  nombre: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  prioridad: {
    type: DataTypes.ENUM('baja', 'media', 'alta'),
    allowNull: false,
    defaultValue: 'media',
  },
  estado: {
    type: DataTypes.ENUM('nueva', 'aprobada', 'denegada', 'tramite', 'progreso', 'entregada'),
    allowNull: false,
    defaultValue: 'nueva',
  },
  descripcion: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  observacionDenegada: {
    type: DataTypes.STRING(500),
    allowNull: true,
    field: 'observacion_denegada',
  },
  idEmpleado: {
    type: DataTypes.STRING(30),
    allowNull: false,
    field: 'id_empleado',
  },
  idDepartamento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_departamento',
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
      as: 'solicitante',
    });
    this.belongsTo(models.Departamentos, {
      foreignKey: 'idDepartamento',
      as: 'departamento',
    });
    this.hasMany(models.ctbComprasOrdenes, {
      foreignKey: 'idSolicitud',
      as: 'ordenes',
    });
    this.hasMany(models.ctbComprasSolicitudesDetalle, {
      foreignKey: 'idSolicitud',
      as: 'solicitudesDetalle',
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
