const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'ctb_compras_solicitudes_detalle',
    {
      id_solicitud_item: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_solicitud: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ctb_compras_solicitudes',
          key: 'id_solicitud',
        },
      },
      nombre: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      especificacion: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: 'Cantidad de productos ingresados',
      },
      id_orden_compra: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'ctb_compras_ordenes',
          key: 'id_orden_compra',
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
      tableName: 'ctb_compras_solicitudes_detalle',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_solicitud_item' }],
        },
        {
          name: 'id_solicitud',
          using: 'BTREE',
          fields: [{ name: 'id_solicitud' }],
        },
        {
          name: 'id_orden_compra',
          using: 'BTREE',
          fields: [{ name: 'id_orden_compra' }],
        },
      ],
    }
  );
};
