const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_formularios_roles',
    {
      id_formulario_rol: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_formulario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_formularios',
          key: 'id_formulario',
        },
      },
      id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_empresas_roles',
          key: 'id',
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
      tableName: 'web_formularios_roles',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_formulario_rol' }],
        },
        {
          name: 'formularios_roles_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_formulario' }, { name: 'id_rol' }],
        },
        {
          name: 'id_rol',
          using: 'BTREE',
          fields: [{ name: 'id_rol' }],
        },
      ],
    }
  );
};
