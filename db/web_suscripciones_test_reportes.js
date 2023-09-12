const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_test_reportes',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_suscripcion_test: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_suscripciones_test',
          key: 'id_suscripcion_test',
        },
      },
      id_reporte: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'test_session_reportes',
          key: 'id',
        },
      },
      id_rol: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_empresas_roles',
          key: 'id',
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
      tableName: 'web_suscripciones_test_reportes',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'id_suscripcion_reporte_rol_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_test' }, { name: 'id_reporte' }, { name: 'id_rol' }],
        },
        {
          name: 'id_reporte',
          using: 'BTREE',
          fields: [{ name: 'id_reporte' }],
        },
        {
          name: 'id_rol',
          using: 'BTREE',
          fields: [{ name: 'id_rol' }],
        },
      ],
    }
  );
};
