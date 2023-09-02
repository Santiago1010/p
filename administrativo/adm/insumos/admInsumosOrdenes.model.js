'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'adm_insumos_ordenes';
const MODEL_NAME = 'admInsumosOrdenes';

const config = require('../../../../config');

const Schema = {
  idOrden: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'id_orden',
  },
  tipo: {
    type: DataTypes.ENUM('entrada', 'salida'),
    allowNull: false,
    defaultValue: 'entrada',
  },
  idEmpleado: {
    type: DataTypes.STRING(30),
    allowNull: false,
    field: 'id_empleado',
  },
  idProveedor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_proveedor',
  },
  idLugar: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_lugar',
  },
  observacion: {
    type: DataTypes.STRING(350),
    allowNull: true,
  },
  precioTotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.0,
    field: 'precio_total',
  },
  tipoPersona: {
    type: DataTypes.ENUM('interno', 'externo'),
    allowNull: false,
    defaultValue: 'interno',
    field: 'tipo_persona',
  },
  documento: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  celular: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  firmaRecibe: {
    type: DataTypes.STRING(250),
    allowNull: true,
    field: 'firma_recibe',
    get() {
      const imageFirma = this.getDataValue('firmaRecibe');
      const hostImage = config.images.host;
      if (!imageFirma) {
        return null;
      }
      return `${hostImage}${imageFirma}`;
    },
  },
  fechaRecibido: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_recibido',
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
    this.belongsTo(models.ctbProveedores, {
      foreignKey: 'idProveedor',
      as: 'proveedor',
    });
    this.belongsTo(models.admInsumosLugares, {
      foreignKey: 'idLugar',
      as: 'lugar',
    });
    this.hasMany(models.admInsumosOrdenesDetalle, {
      foreignKey: 'idOrden',
      as: 'detallesOrden',
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
