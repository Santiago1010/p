'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_compras_ordenes_entrega';
const MODEL_NAME = 'ctbComprasOrdenesEntrega';

const Schema = {
  idOrdenEntrega: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_orden_entrega',
  },
  idOrdenCompra: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_orden_compra',
  },
  fechaEntrega: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'fecha_entrega',
  },
  idEmpleadoEntrega: {
    type: DataTypes.STRING(30),
    allowNull: false,
    field: 'id_empleado_entrega',
  },
  idEmpleadoRecibe: {
    type: DataTypes.STRING(30),
    allowNull: false,
    field: 'id_empleado_recibe',
  },
  idEmpleadoFirma: {
    type: DataTypes.STRING(30),
    allowNull: true,
    field: 'id_empleado_firma',
    defaultValue: null,
  },
  firmada: {
    type: DataTypes.VIRTUAL,
    get() {
      const idEmpleadoFirma = this.getDataValue('idEmpleadoFirma');

      if (idEmpleadoFirma) {
        return true;
      }

      return false;
    },
    set(value) {
      throw new Error('`firmada` es un campo virtual no se puede guardar');
    },
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
    this.belongsTo(models.ctbComprasOrdenes, {
      foreignKey: 'idOrdenCompra',
      as: 'ordenCompra',
    });
    this.belongsTo(models.admEmpleados, {
      foreignKey: 'idEmpleadoEntrega',
      as: 'empleadoEntrega',
    });
    this.belongsTo(models.admEmpleados, {
      foreignKey: 'idEmpleadoRecibe',
      as: 'empleadoRecibe',
    });
    this.belongsTo(models.admEmpleados, {
      foreignKey: 'idEmpleadoFirma',
      as: 'empleadoFirma',
    });
    this.hasMany(models.ctbComprasOrdenesEntregaDetalle, {
      foreignKey: 'idOrdenEntrega',
      as: 'detallesOrdenEntrega',
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
