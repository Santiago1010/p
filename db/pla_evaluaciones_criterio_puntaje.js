const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'pla_evaluaciones_criterio_puntaje',
    {
      id_conf_criterio: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_criterio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pla_criterios',
          key: 'id_criterio',
        },
      },
      id_evaluacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pla_evaluaciones',
          key: 'id_evaluacion',
        },
      },
      porcentaje: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
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
      tableName: 'pla_evaluaciones_criterio_puntaje',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_conf_criterio' }],
        },
        {
          name: 'pla_criterio_puntaje_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_criterio' }, { name: 'id_evaluacion' }],
        },
        {
          name: 'id_evaluacion',
          using: 'BTREE',
          fields: [{ name: 'id_evaluacion' }],
        },
      ],
    }
  );
};
