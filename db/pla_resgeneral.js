const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'pla_resgeneral',
    {
      id_resgeneral: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_eval_grupos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pla_grupos_evaluacion',
          key: 'id_eval_grupos',
        },
      },
      id_evaluado: {
        type: DataTypes.STRING(30),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      id_evaluador: {
        type: DataTypes.STRING(30),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      puntaje_total: {
        type: DataTypes.DECIMAL(10, 2),
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
      tableName: 'pla_resgeneral',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_resgeneral' }],
        },
        {
          name: 'pla_resgeneral_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_eval_grupos' }, { name: 'id_evaluado' }, { name: 'id_evaluador' }],
        },
        {
          name: 'id_evaluado',
          using: 'BTREE',
          fields: [{ name: 'id_evaluado' }],
        },
        {
          name: 'id_evaluador',
          using: 'BTREE',
          fields: [{ name: 'id_evaluador' }],
        },
      ],
    }
  );
};
