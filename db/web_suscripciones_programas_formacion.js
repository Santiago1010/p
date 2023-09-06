const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_programas_formacion',
    {
      id_suscripcion_programa_formacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_suscripcion: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_programa_formacion: {
        type: DataTypes.INTEGER,
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
      tableName: 'web_suscripciones_programas_formacion',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_programa_formacion' }],
        },
        {
          name: 'FK_web_suscripciones_programas_formacion_web_suscripciones',
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion' }],
        },
        {
          name: 'FK_web_suscripciones_programas_formacion_web_programas_formacion',
          using: 'BTREE',
          fields: [{ name: 'id_programa_formacion' }],
        },
      ],
    }
  );
};
