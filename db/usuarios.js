const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'usuarios',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: 'email_UN',
      },
      pass: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: 'Contraseña para entrar al sistema de administracion eds',
      },
      codemp: {
        type: DataTypes.STRING(15),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
        unique: 'usuarios_ibfk_1',
      },
      id_perfil: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'usuarios_perfil',
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
      tableName: 'usuarios',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'email_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'email' }],
        },
        {
          name: 'codemp_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'codemp' }],
        },
        {
          name: 'FK_usuarios_usuarios_perfil',
          using: 'BTREE',
          fields: [{ name: 'id_perfil' }],
        },
        {
          name: 'FK_usuarios_adm_empleados',
          using: 'BTREE',
          fields: [{ name: 'codemp' }],
        },
      ],
    }
  );
};
