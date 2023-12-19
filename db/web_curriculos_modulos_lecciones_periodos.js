const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_curriculos_modulos_lecciones_periodos',
    {
      id_leccion_periodo: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_periodo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_suscripciones_curriculos_periodos',
          key: 'id_periodo',
        },
      },
      id_leccion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_curriculos_modulos_lecciones',
          key: 'id_leccion_curriculo',
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
      tableName: 'web_curriculos_modulos_lecciones_periodos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_leccion_periodo' }],
        },
        {
          name: 'id_periodo',
          using: 'BTREE',
          fields: [{ name: 'id_periodo' }],
        },
        {
          name: 'id_leccion',
          using: 'BTREE',
          fields: [{ name: 'id_leccion' }],
        },
      ],
    }
  );
};
