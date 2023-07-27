const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_eventos',
    {
      id_suscripcion_evento: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_suscripcion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_suscripciones',
          key: 'id_suscripcion',
        },
      },
      id_evento: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_eventos',
          key: 'id_eventos',
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
      tableName: 'web_suscripciones_eventos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_evento' }],
        },
        {
          name: 'web_suscripciones_eventos_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion' }, { name: 'id_evento' }],
        },
        {
          name: 'FK_web_suscripciones_eventos_web_eventos',
          using: 'BTREE',
          fields: [{ name: 'id_evento' }],
        },
      ],
    }
  );
};
