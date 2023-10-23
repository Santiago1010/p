const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'pla_grupos_usuarios',
    {
      id_grupo_usuario: {
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
      id_empleado: {
        type: DataTypes.STRING(30),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      id_rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pla_roles',
          key: 'id_rol',
        },
      },
      id_anio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'config_anios',
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
      tableName: 'pla_grupos_usuarios',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_grupo_usuario' }],
        },
        {
          name: 'pla_grupos_usuarios_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_grupo' }, { name: 'id_empleado' }, { name: 'id_anio' }],
        },
        {
          name: 'id_empleado',
          using: 'BTREE',
          fields: [{ name: 'id_empleado' }],
        },
        {
          name: 'id_rol',
          using: 'BTREE',
          fields: [{ name: 'id_rol' }],
        },
        {
          name: 'id_anio',
          using: 'BTREE',
          fields: [{ name: 'id_anio' }],
        },
      ],
    }
  );
};
