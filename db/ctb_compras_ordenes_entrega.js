const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'ctb_compras_ordenes_entrega',
    {
      id_orden_entrega: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_orden_compra: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ctb_compras_ordenes',
          key: 'id_orden_compra',
        },
      },
      fecha_entrega: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      id_empleado_entrega: {
        type: DataTypes.STRING(30),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      id_empleado_recibe: {
        type: DataTypes.STRING(30),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      id_empleado_firma: {
        type: DataTypes.STRING(30),
        allowNull: true,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
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
      tableName: 'ctb_compras_ordenes_entrega',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_orden_entrega' }],
        },
        {
          name: 'id_orden_compra',
          using: 'BTREE',
          fields: [{ name: 'id_orden_compra' }],
        },
        {
          name: 'id_empleado_entrega',
          using: 'BTREE',
          fields: [{ name: 'id_empleado_entrega' }],
        },
        {
          name: 'id_empleado_recibe',
          using: 'BTREE',
          fields: [{ name: 'id_empleado_recibe' }],
        },
        {
          name: 'id_empleado_firma',
          using: 'BTREE',
          fields: [{ name: 'id_empleado_firma' }],
        },
      ],
    }
  );
};
