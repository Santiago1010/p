'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_compras_ordenes';
const MODEL_NAME = 'ctbComprasOrdenes';

const Schema = {
  idOrdenCompra: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_orden_compra',
  },
  idSolicitud: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_solicitud',
  },
  idProveedor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_proveedor',
  },
  observacion: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  subtotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  descuento: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: null,
  },
  iva: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  cotizacion: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  cotizacionAd1: {
    type: DataTypes.STRING(200),
    allowNull: true,
    field: 'cotizacion_ad1',
  },
  cotizacionAd2: {
    type: DataTypes.STRING(200),
    allowNull: true,
    field: 'cotizacion_ad2',
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
  observacionProveedor: {
    type: DataTypes.STRING(350),
    allowNull: true,
    field: 'observacion_proveedor',
  },
  valoracionProveedor: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'valoracion_proveedor',
  },
  observacionOrden: {
    type: DataTypes.STRING(350),
    allowNull: true,
    field: 'observacion_orden',
  },
  valoracionOrden: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'valoracion_orden',
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
    this.belongsTo(models.ctbComprasSolicitudes, {
      foreignKey: 'idSolicitud',
      as: 'solicitud',
    });
    this.belongsTo(models.ctbProveedores, {
      foreignKey: 'idProveedor',
      as: 'proveedor',
    });
    this.belongsTo(models.admEmpleados, {
      foreignKey: 'idEmpleadoAutoriza',
      as: 'empleadoAutoriza',
    });
    this.hasMany(models.ctbComprasOrdenesEntrega, {
      foreignKey: 'idOrdenCompra',
      as: 'ordenesEntrega',
    });
    this.hasMany(models.ctbComprasSolicitudesDetalle, {
      foreignKey: 'idOrdenCompra',
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
