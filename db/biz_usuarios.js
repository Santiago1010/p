const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'biz_usuarios',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING(155),
        allowNull: false,
        unique: 'username',
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      empresa_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_empresas',
          key: 'id_empresa',
        },
      },
      nombre: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'biz_roles',
          key: 'id',
        },
      },
      fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      licencias: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      celular: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      documento: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_foto: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_imagenes',
          key: 'id_imagen',
        },
      },
      id_web_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_usuarios',
          key: 'id_usuario',
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
      tableName: 'biz_usuarios',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'username',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'username' }],
        },
        {
          name: 'empresa_id',
          using: 'BTREE',
          fields: [{ name: 'empresa_id' }],
        },
        {
          name: 'rol',
          using: 'BTREE',
          fields: [{ name: 'rol' }],
        },
        {
          name: 'biz_usuarios_ibfk_3',
          using: 'BTREE',
          fields: [{ name: 'id_foto' }],
        },
        {
          name: 'biz_usuarios_id_web_usuario_foreign_idx',
          using: 'BTREE',
          fields: [{ name: 'id_web_usuario' }],
        },
      ],
    }
  );
};
