const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'pla_evaluaciones_configuracion',
    {
      id_configuracion: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_anio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'config_anios',
          key: 'id',
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
      fecha_inicio: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      fecha_fin_auto: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: 'Fecha fin de autoevaluacion',
      },
      fecha_fin_eva: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: 'Fecha fin de evaluacion',
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
      tableName: 'pla_evaluaciones_configuracion',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_configuracion' }],
        },
        {
          name: 'id_anio',
          using: 'BTREE',
          fields: [{ name: 'id_anio' }],
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
