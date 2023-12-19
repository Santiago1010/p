const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'pla_grupos_evaluacion',
    {
      id_eval_grupos: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_grupo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pla_grupos',
          key: 'id_grupo',
        },
      },
      id_configuracion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pla_evaluaciones_configuracion',
          key: 'id_configuracion',
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
      tableName: 'pla_grupos_evaluacion',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_eval_grupos' }],
        },
        {
          name: 'pla_grupos_evaluacion_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_grupo' }, { name: 'id_configuracion' }],
        },
        {
          name: 'id_configuracion',
          using: 'BTREE',
          fields: [{ name: 'id_configuracion' }],
        },
      ],
    }
  );
};
