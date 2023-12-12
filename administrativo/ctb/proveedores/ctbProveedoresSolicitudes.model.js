'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_proveedores_solicitudes';
const MODEL_NAME = 'ctbProveedoresSolicitudes';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  codunico: {
    type: DataTypes.STRING(15),
    allowNull: true,
    unique: 'codunico',
  },
  idProveedor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    references: {
      model: 'ctb_proveedores',
      key: 'id',
    },
    field: 'id_proveedor',
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
  idResponsable: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ctb_proveedores_respons',
      key: 'id',
    },
    field: 'id_responsable',
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    comment: 'Fecha de la solicitud, en la mayoria de los casos es igual que created_at',
  },
  total: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  estado: {
    type: DataTypes.ENUM('nueva', 'progreso', 'aprobada', 'finalizada'),
    allowNull: false,
    defaultValue: 'nueva',
  },
  idCuenta: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ctb_proveedores_cuentas',
      key: 'id',
    },
    field: 'id_cuenta',
  },
  idRecurrente: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ctb_proveedores_solicitudes_recurrentes',
      key: 'id',
    },
    field: 'id_recurrente',
  },
  idEmpleadoGenera: {
    type: DataTypes.STRING(30),
    allowNull: true,
    comment: 'Empleado que generó la solicitud de manera INTERNA',
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado_genera',
  },
  idEmpleadoAjustes: {
    type: DataTypes.STRING(30),
    allowNull: true,
    comment: 'Empleado que realizó el ultimo ajuste (valores, no aplica para cambio de estado) la solicitud',
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado_ajustes',
  },
  idEmpleadoAprueba: {
    type: DataTypes.STRING(30),
    allowNull: true,
    comment: 'Empleado que apruebó la solicitud',
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado_aprueba',
  },
  valretefuente: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: true,
  },
  valreteica: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: true,
  },
  otrosDescuentos: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: true,
    field: 'otros_descuentos',
  },
  observacion: {
    type: DataTypes.STRING(500),
    allowNull: true,
    comment: 'Observacion de solicitud / notificacion',
  },
  idCuentaPago: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Cuenta de la cual se realiza el pago, obligatorio cuando el estado pase a finalizada',
    references: {
      model: 'ctb_pagos_cuentas',
      key: 'id',
    },
    field: 'id_cuenta_pago',
  },
  fechaPago: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_pago',
  },
  observacionPago: {
    type: DataTypes.STRING(500),
    allowNull: true,
    comment: 'Observación del pago',
    field: 'observacion_pago',
  },
  codigoCufe: {
    type: DataTypes.STRING(150),
    allowNull: true,
    comment: 'Código de factura de la DIAN',
    field: 'codigo_cufe',
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
    this.belongsTo(models.admEmpleados, {
      as: 'empleadoGenera',
      foreignKey: 'idEmpleadoGenera',
    });
    this.belongsTo(models.admEmpleados, { as: 'empleado', foreignKey: 'idEmpleado' });
    this.belongsTo(models.admEmpleados, {
      as: 'empleadoAjustes',
      foreignKey: 'idEmpleadoAjustes',
    });
    this.belongsTo(models.admEmpleados, {
      as: 'empleadoAprueba',
      foreignKey: 'idEmpleadoAprueba',
    });
    this.belongsTo(models.ctbPagosCuentas, {
      as: 'cuentaPago',
      foreignKey: 'idCuentaPago',
    });
    this.belongsTo(models.ctbProveedores, { as: 'proveedor', foreignKey: 'idProveedor' });
    this.belongsTo(models.ctbProveedoresCuentas, {
      as: 'cuenta',
      foreignKey: 'idCuenta',
    });
    this.belongsTo(models.ctbProveedoresRespons, {
      as: 'responsable',
      foreignKey: 'idResponsable',
    });
    this.belongsTo(models.ctbProveedoresSolicitudesRecurrentes, {
      as: 'recurrente',
      foreignKey: 'idRecurrente',
    });
    this.hasMany(models.ctbProveedoresSolicitudesDetalle, {
      as: 'solicitudes',
      foreignKey: 'idSolicitud',
    });
    this.hasMany(models.ctbProveedoresSolicitudesRecurrentes, {
      as: 'solicitudesRecurrentes',
      foreignKey: 'idSolicitud',
    });
    this.hasOne(models.ctbEgresos, { as: 'egreso', foreignKey: 'idProveedorSolicitud' });
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
