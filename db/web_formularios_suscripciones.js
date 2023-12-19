const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_formularios_suscripciones',
    {
      id_formulario_suscripcion: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_formulario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_formularios',
          key: 'id_formulario',
        },
      },
      id_suscripcion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_suscripciones',
          key: 'id_suscripcion',
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
      tableName: 'web_formularios_suscripciones',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_formulario_suscripcion' }],
        },
        {
          name: 'formularios_suscripciones_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_formulario' }, { name: 'id_suscripcion' }],
        },
        {
          name: 'id_suscripcion',
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion' }],
        },
      ],
    }
  );
};
