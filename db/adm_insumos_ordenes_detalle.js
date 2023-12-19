const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'adm_insumos_ordenes_detalle',
    {
      id_detalle: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_orden: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'adm_insumos_ordenes',
          key: 'id_orden',
        },
      },
      id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'adm_insumos_productos',
          key: 'id_producto',
        },
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: 'Cantidad de productos ingresados',
      },
      precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
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
      tableName: 'adm_insumos_ordenes_detalle',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_detalle' }],
        },
        {
          name: 'id_orden',
          using: 'BTREE',
          fields: [{ name: 'id_orden' }],
        },
        {
          name: 'id_producto',
          using: 'BTREE',
          fields: [{ name: 'id_producto' }],
        },
      ],
    }
  );
};
