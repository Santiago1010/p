const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_propuestas_planes_pago_cuotas',
    {
      id_cuota: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_plan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_propuestas_planes_pago',
          key: 'id_plan',
        },
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
      fecha_pago: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: 'Fecha en la que se realizo el pago de la cuota, si es NULL no se ha pagado',
      },
      vaucher: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_medio_pago: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ctb_medios_pago',
          key: 'id',
        },
      },
      id_lugar: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ctb_pagos_lugar',
          key: 'id',
        },
      },
      id_cuenta: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ctb_pagos_cuentas',
          key: 'id',
        },
      },
      id_tarjeta: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ctb_pagos_tarjetas',
          key: 'id',
        },
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'web_propuestas_planes_pago_cuotas',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_cuota' }],
        },
        {
          name: 'id_plan',
          using: 'BTREE',
          fields: [{ name: 'id_plan' }],
        },
        {
          name: 'id_medio_pago',
          using: 'BTREE',
          fields: [{ name: 'id_medio_pago' }],
        },
        {
          name: 'id_lugar',
          using: 'BTREE',
          fields: [{ name: 'id_lugar' }],
        },
        {
          name: 'id_cuenta',
          using: 'BTREE',
          fields: [{ name: 'id_cuenta' }],
        },
        {
          name: 'id_tarjeta',
          using: 'BTREE',
          fields: [{ name: 'id_tarjeta' }],
        },
      ],
    }
  );
};
