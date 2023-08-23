const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'acf_traslados_detalle',
    {
      id_traslado_detalle: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_traslado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'acf_traslados',
          key: 'id_traslado',
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
      id_prestamo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'acf_traslados',
          key: 'id_traslado',
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
      tableName: 'acf_traslados_detalle',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_traslado_detalle' }],
        },
        {
          name: 'traslados_detalles_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_traslado' }, { name: 'id_equipo' }],
        },
        {
          name: 'id_equipo',
          using: 'BTREE',
          fields: [{ name: 'id_equipo' }],
        },
        {
          name: 'id_prestamo',
          using: 'BTREE',
          fields: [{ name: 'id_prestamo' }],
        },
      ],
    }
  );
};
