const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'test_actividades_configuracion',
    {
      id_configuracion: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_actividad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'test_actividades',
          key: 'id_actividad',
        },
      },
      id_cerebro: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'test_cerebros',
          key: 'id',
        },
      },
      id_habilidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'test_habilidades',
          key: 'id_habilidad',
        },
      },
      orden: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
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
      tableName: 'test_actividades_configuracion',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_configuracion' }],
        },
        {
          name: 'id_actividad',
          using: 'BTREE',
          fields: [{ name: 'id_actividad' }],
        },
        {
          name: 'id_cerebro',
          using: 'BTREE',
          fields: [{ name: 'id_cerebro' }],
        },
        {
          name: 'id_habilidad',
          using: 'BTREE',
          fields: [{ name: 'id_habilidad' }],
        },
      ],
    }
  );
};
