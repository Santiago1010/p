const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'test_general_roles',
    {
      id_test_rol: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_test: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'test_general',
          key: 'id',
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
      tableName: 'test_general_roles',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_test_rol' }],
        },
        {
          name: 'test_rol_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_test' }, { name: 'id_rol' }],
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
