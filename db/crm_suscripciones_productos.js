const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'crm_suscripciones_productos',
    {
      id_suscripcion_producto: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_suscripcion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_suscripciones',
          key: 'id_suscripcion',
        },
      },
      id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'crm_productos',
          key: 'id_producto',
        },
      },
      estado_responsable: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: '0: Pendiente, 1: En progreso, 2: Finalizado',
      },
      estado_tester: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
        comment: '0: Pendiente, 1: En progreso, 2: Finalizado',
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
      tableName: 'crm_suscripciones_productos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_producto' }],
        },
        {
          name: 'suscripcion_producto_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion' }, { name: 'id_producto' }],
        },
        {
          name: 'id_producto',
          using: 'BTREE',
          fields: [{ name: 'id_producto' }],
        },
      ],
    }
  );
};
