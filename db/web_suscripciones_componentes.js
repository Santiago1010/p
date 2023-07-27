const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_componentes',
    {
      id_suscripcion_componente: {
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
      id_componente: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_componentes',
          key: 'id_componente',
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
      tableName: 'web_suscripciones_componentes',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_componente' }],
        },
        {
          name: 'id_escuela_id_componente',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion' }, { name: 'id_componente' }],
        },
        {
          name: 'FK_web_escuelas_componentes_web_componentes',
          using: 'BTREE',
          fields: [{ name: 'id_componente' }],
        },
      ],
    }
  );
};
