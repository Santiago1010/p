const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_programas_calendario_detalle',
    {
      id_programa_cronograma: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_programa_calendario: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_capsula: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fecha: {
        type: DataTypes.DATEONLY,
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
      enviados: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      recibidos: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      vistos: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'web_suscripciones_programas_calendario_detalle',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_programa_cronograma' }],
        },
        {
          name: 'web_suscripciones_programas_calendario_detalle_FK',
          using: 'BTREE',
          fields: [{ name: 'id_capsula' }],
        },
        {
          name: 'web_suscripciones_programas_calendario_detalle_FK_1',
          using: 'BTREE',
          fields: [{ name: 'id_programa_calendario' }],
        },
      ],
    }
  );
};
