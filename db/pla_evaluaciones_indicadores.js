const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'pla_evaluaciones_indicadores',
    {
      id_conf_indicador: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_indicador: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pla_indicadores',
          key: 'id_indicador',
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
      tableName: 'pla_evaluaciones_indicadores',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_conf_indicador' }],
        },
        {
          name: 'pla_evaluaciones_indicadores_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_indicador' }, { name: 'id_evaluacion' }],
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
