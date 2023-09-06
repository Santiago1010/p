const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_curriculos_grupos_cronograma',
    {
      id_suscripcion_curriculo_grupo_cronograma: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_suscripcion_curriculo_grupo: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fecha_clase: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      descripcion: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0,
        comment: '0=Pendiente, 1=Proceso, 2=Finalizado',
      },
      fecha_add: {
        type: DataTypes.DATE,
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
      tableName: 'web_suscripciones_curriculos_grupos_cronograma',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_curriculo_grupo_cronograma' }],
        },
        {
          name: 'web_suscripciones_curriculos_grupos_cronograma_FK',
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_curriculo_grupo' }],
        },
      ],
    }
  );
};
