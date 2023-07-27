const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_curriculos_evaluaciones',
    {
      id_evaluacion: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_test: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'test_general',
          key: 'id',
        },
      },
      id_suscripcion_curriculo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_suscripciones_curriculos',
          key: 'id_suscripcion_curriculo',
        },
      },
      tipo: {
        type: DataTypes.ENUM('seguimiento', 'referencia'),
        allowNull: false,
        defaultValue: 'seguimiento',
      },
      fecha_inicio: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      fecha_fin: {
        type: DataTypes.DATEONLY,
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
      tableName: 'web_curriculos_evaluaciones',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_evaluacion' }],
        },
        {
          name: 'id_test',
          using: 'BTREE',
          fields: [{ name: 'id_test' }],
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
