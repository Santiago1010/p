const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_curriculos_grupos',
    {
      id_suscripcion_curriculo_grupo: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_suscripcion_curriculo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_suscripciones_curriculos',
          key: 'id_suscripcion_curriculo',
        },
      },
      id_grupo_curriculo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_curriculos_grupos',
          key: 'id_grupo_curriculo',
        },
      },
      id_suscripcion_curriculo_ciclo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_suscripciones_curriculos_ciclos',
          key: 'id_suscripcion_curriculo_ciclo',
        },
      },
      nro_matriculados: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: 'Grupo A',
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
      tableName: 'web_suscripciones_curriculos_grupos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_curriculo_grupo' }],
        },
        {
          name: 'web_suscripciones_curriculos_grupos_FK_1',
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_curriculo_ciclo' }],
        },
        {
          name: 'web_suscripciones_curriculos_grupos_FK_2',
          using: 'BTREE',
          fields: [{ name: 'id_grupo_curriculo' }],
        },
        {
          name: 'web_suscripciones_curriculos_grupos_FK',
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_curriculo' }],
        },
      ],
    }
  );
};
