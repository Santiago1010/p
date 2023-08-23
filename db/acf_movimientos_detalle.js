const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'acf_movimientos_detalle',
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
          model: 'acf_movimientos',
          key: 'id_movimiento',
        },
      },
      id_equipo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'acf_equipos',
          key: 'id_equipo',
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
      tableName: 'acf_movimientos_detalle',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_movimiento_detalle' }],
        },
        {
          name: 'bajas_detalles_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_movimiento' }, { name: 'id_equipo' }],
        },
        {
          name: 'id_equipo',
          using: 'BTREE',
          fields: [{ name: 'id_equipo' }],
        },
      ],
    }
  );
};
