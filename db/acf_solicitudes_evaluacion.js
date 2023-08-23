const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'acf_solicitudes_evaluacion',
    {
      id_solicitud_evaluacion: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_solicitud: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'acf_solicitudes',
          key: 'id_solicitud',
        },
      },
      id_criterio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'acf_solicitudes_evaluacion_criterios',
          key: 'id_criterio_evalua',
        },
      },
      valoracion: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
      tableName: 'acf_solicitudes_evaluacion',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_solicitud_evaluacion' }],
        },
        {
          name: 'solicitudes_evaluaciones_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_solicitud' }, { name: 'id_criterio' }],
        },
        {
          name: 'id_criterio',
          using: 'BTREE',
          fields: [{ name: 'id_criterio' }],
        },
      ],
    }
  );
};
