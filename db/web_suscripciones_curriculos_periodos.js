const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_curriculos_periodos',
    {
      id_periodo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_suscripcion_curriculo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      fecha_fin: {
        type: DataTypes.DATE,
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
      tableName: 'web_suscripciones_curriculos_periodos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_periodo' }],
        },
        {
          name: 'id_suscripcion_curriculo',
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_curriculo' }],
        },
      ],
    }
  );
};
