const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'permisos_api_opciones_usuarios',
    {
      id_permiso_usuario: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_permiso: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'permisos_api_opciones',
          key: 'id_permiso',
        },
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
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
      tableName: 'permisos_api_opciones_usuarios',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_permiso_usuario' }],
        },
        {
          name: 'id_permiso',
          using: 'BTREE',
          fields: [{ name: 'id_permiso' }],
        },
        {
          name: 'id_usuario',
          using: 'BTREE',
          fields: [{ name: 'id_usuario' }],
        },
      ],
    }
  );
};
