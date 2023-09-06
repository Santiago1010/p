const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_usuarios_notificaciones',
    {
      id_usuario_notificacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_test: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      texto_notificacion: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      fecha_notificacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      visto_notificacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'web_usuarios_notificaciones',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_usuario_notificacion' }],
        },
        {
          name: 'FK_web_usuarios_notificaciones_web_usuarios',
          using: 'BTREE',
          fields: [{ name: 'id_usuario' }],
        },
        {
          name: 'FK_web_usuarios_notificaciones_test_resgeneral',
          using: 'BTREE',
          fields: [{ name: 'id_test' }],
        },
        {
          name: 'FK_web_usuarios_notificaciones_web_empresas',
          using: 'BTREE',
          fields: [{ name: 'id_empresa' }],
        },
      ],
    }
  );
};
