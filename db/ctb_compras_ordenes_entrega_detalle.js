const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'ctb_compras_ordenes_entrega_detalle',
    {
      id_detalle_entrega: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_orden_entrega: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ctb_compras_ordenes_entrega',
          key: 'id_orden_entrega',
        },
      },
      id_solicitud_item: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ctb_compras_solicitudes_detalle',
          key: 'id_solicitud_item',
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
      tableName: 'ctb_compras_ordenes_entrega_detalle',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_detalle_entrega' }],
        },
        {
          name: 'id_orden_entrega',
          using: 'BTREE',
          fields: [{ name: 'id_orden_entrega' }],
        },
        {
          name: 'id_solicitud_item',
          using: 'BTREE',
          fields: [{ name: 'id_solicitud_item' }],
        },
      ],
    }
  );
};
