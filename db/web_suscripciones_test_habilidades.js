const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_test_habilidades',
    {
      id_suscripcion_habilidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_suscripcion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_habilidad: {
        type: DataTypes.INTEGER,
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
      tableName: 'web_suscripciones_test_habilidades',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_habilidad' }],
        },
        {
          name: 'id_suscripcion',
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion' }],
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
