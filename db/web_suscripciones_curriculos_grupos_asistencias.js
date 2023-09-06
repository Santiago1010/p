const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_curriculos_grupos_asistencias',
    {
      id_suscripcion_curriculo_grupo_asistencia: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_suscripcion_curriculo_grupo_cronograma: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_suscripcion_curriculo_estudiante: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      estado_asistencia: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: '0=No asistio,1=asistio, 2=con excusa',
      },
      fecha: {
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
      tableName: 'web_suscripciones_curriculos_grupos_asistencias',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_curriculo_grupo_asistencia' }],
        },
        {
          name: 'web_suscripciones_curriculos_grupos_asistencias_UN',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id_suscripcion_curriculo_grupo_cronograma' },
            { name: 'id_suscripcion_curriculo_estudiante' },
          ],
        },
        {
          name: 'web_suscripciones_curriculos_grupos_asistencias_FK_1',
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_curriculo_estudiante' }],
        },
      ],
    }
  );
};
