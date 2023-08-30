'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_propuestas_planes_pago_cuotas';
const MODEL_NAME = 'webPropuestasPlanesPagoCuotas';

const Schema = {
  idCuota: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_cuota',
  },
  idPlan: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_propuestas_planes_pago',
      key: 'id_plan',
    },
    field: 'id_plan',
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    comment: 'Fecha para pagar la cuota',
  },
  fechaPago: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    comment: 'Fecha en la que se realizo el pago de la cuota, si es NULL no se ha pagado',
    field: 'fecha_pago',
  },
  vaucher: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  idMedioPago: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ctb_medios_pago',
      key: 'id',
    },
    field: 'id_medio_pago',
  },
  idLugar: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ctb_pagos_lugar',
      key: 'id',
    },
    field: 'id_lugar',
  },
  idCuenta: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ctb_pagos_cuentas',
      key: 'id',
    },
    field: 'id_cuenta',
  },
  idTarjeta: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ctb_pagos_tarjetas',
      key: 'id',
    },
    field: 'id_tarjeta',
  },
  estado: {
    type: DataTypes.VIRTUAL,
    get() {
      let today = new Date();
      today.setUTCHours(0, 0, 0, 0);

      const fechaCuota = new Date(this.getDataValue('fecha'));
      const fechaPago = this.getDataValue('fechaPago');

      if (fechaPago === null && fechaCuota.getTime() < today.getTime()) {
        return 'mora';
      } else if (fechaPago !== null) {
        return 'pagado';
      } else {
        return 'pendiente';
      }
    },
    set(value) {
      throw new Error('Estado es un campo virtual no se puede guardar');
    },
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
    this.belongsTo(models.ctbMediosPago, { as: 'medioPago', foreignKey: 'idMedioPago' });
    this.belongsTo(models.ctbPagosCuentas, { as: 'cuenta', foreignKey: 'idCuenta' });
    this.belongsTo(models.ctbPagosLugar, { as: 'lugar', foreignKey: 'idLugar' });
    this.belongsTo(models.ctbPagosTarjetas, { as: 'tarjeta', foreignKey: 'idTarjeta' });
    this.belongsTo(models.webPropuestasPlanesPago, { as: 'planPago', foreignKey: 'idPlan' });
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
