const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'adm_insumos_movimientos_detalle',
    {
      id_movimiento_detalle: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_movimiento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'adm_insumos_movimientos',
          key: 'id_movimiento',
        },
      },
      id_lugar_destino: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'adm_insumos_lugares',
          key: 'id_lugar',
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
        comment: 'Cantidad de productos movidos',
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
      tableName: 'adm_insumos_movimientos_detalle',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_movimiento_detalle' }],
        },
        {
          name: 'id_movimiento',
          using: 'BTREE',
          fields: [{ name: 'id_movimiento' }],
        },
        {
          name: 'id_lugar_destino',
          using: 'BTREE',
          fields: [{ name: 'id_lugar_destino' }],
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
