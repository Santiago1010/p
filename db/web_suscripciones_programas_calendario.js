const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_programas_calendario',
    {
      id_programa_calendario: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_suscripcion_prog_formacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
          model: 'web_suscripciones_programas_formacion',
          key: 'id_suscripcion_programa_formacion',
        },
      },
      titulo: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      descripcion: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      fecha_inicio: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      fecha_fin: {
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
    },
    {
      sequelize,
      tableName: 'web_suscripciones_programas_calendario',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_programa_calendario' }],
        },
        {
          name: 'web_suscripciones_programas_calendario_FK',
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_prog_formacion' }],
        },
      ],
    }
  );
};
