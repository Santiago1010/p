'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../../../../config');

const TABLE_NAME = 'ctb_caja_menor_egresos';
const MODEL_NAME = 'ctbCajaMenorEgresos';

const Schema = {
  idEgreso: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_egreso',
  },
  idCajaMenor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_caja_menor',
  },
  tipo: {
    type: DataTypes.VIRTUAL,
    get() {
      const idIngreso = this.getDataValue('idIngreso');

      return idIngreso == null ? 'devolucion' : 'recibo';
    },
    set() {
      throw new Error('`tipo` es un campo virtual no se puede guardar');
    },
  },
  idIngreso: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'id_ingreso',
    defaultValue: null,
    comment: 'Relación al ingreso (Evento). Si es NULL, se trata de una devolución.',
  },
  idEmpleado: {
    type: DataTypes.STRING(30),
    allowNull: false,
    field: 'id_empleado',
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  tipoEntrega: {
    type: DataTypes.ENUM('interno', 'externo'),
    allowNull: false,
    defaultValue: 'interno',
    field: 'tipo_entrega',
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  proposito: {
    type: DataTypes.STRING(450),
    allowNull: false,
  },
  documento: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: null,
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  celular: {
    type: DataTypes.STRING(10),
    allowNull: true,
    defaultValue: null,
  },
  firma: {
    type: DataTypes.STRING(200),
    allowNull: false,
    get() {
      const imageLocation = this.getDataValue('firma');
      const hostImage = config.images.host;
      if (!imageLocation) {
        return null;
      }
      return `${hostImage}${imageLocation}`;
    },
  },
  factura: {
    type: DataTypes.STRING(200),
    allowNull: true,
    defaultValue: null,
    get() {
      const imageLocation = this.getDataValue('factura');
      const hostImage = config.images.host;
      if (!imageLocation) {
        return null;
      }
      return `${hostImage}${imageLocation}`;
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
    this.belongsTo(models.ctbCajaMenor, {
      foreignKey: 'idCajaMenor',
      as: 'cajaMenor',
    });
    this.belongsTo(models.admEmpleados, {
      foreignKey: 'idEmpleado',
      as: 'empleado',
    });
    this.belongsTo(models.ctbCajaMenorIngresos, {
      foreignKey: 'idIngreso',
      as: 'ingreso',
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
