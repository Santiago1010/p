const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'crm_propuestas_responsables',
    {
      id_propuesta_responsable: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_propuesta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_suscripciones_propuestas',
          key: 'id_suscripcion_propuesta',
        },
      },
      id_responsable: {
        type: DataTypes.STRING(30),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
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
      tableName: 'crm_propuestas_responsables',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_propuesta_responsable' }],
        },
        {
          name: 'propuesta_responsable_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_propuesta' }, { name: 'id_responsable' }],
        },
        {
          name: 'id_responsable',
          using: 'BTREE',
          fields: [{ name: 'id_responsable' }],
        },
      ],
    }
  );
};
