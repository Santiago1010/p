const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_curriculos',
    {
      id_suscripcion_curriculo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_suscripcion: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_curriculo: {
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
      tableName: 'web_suscripciones_curriculos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_curriculo' }],
        },
        {
          name: 'suscripcion_curriculo_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion' }, { name: 'id_curriculo' }],
        },
        {
          name: 'web_suscripciones_curriculos_FK',
          using: 'BTREE',
          fields: [{ name: 'id_curriculo' }],
        },
        {
          name: 'web_suscripciones_curriculos_FK_1',
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion' }],
        },
      ],
    }
  );
};
