const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_certificados',
    {
      id_suscripcion_certificado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_suscripcion: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_certificado: {
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
      tableName: 'web_suscripciones_certificados',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_certificado' }],
        },
        {
          name: 'FK_web_suscripciones_certificados_web_suscripciones',
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion' }],
        },
        {
          name: 'FK_web_suscripciones_certificados_web_certificados',
          using: 'BTREE',
          fields: [{ name: 'id_certificado' }],
        },
      ],
    }
  );
};
