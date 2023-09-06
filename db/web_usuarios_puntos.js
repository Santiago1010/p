const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_usuarios_puntos',
    {
      id_usuario_punto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      puntos: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'web_usuarios_puntos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_usuario_punto' }],
        },
        {
          name: 'FK_web_usuarios_puntos_web_usuarios',
          using: 'BTREE',
          fields: [{ name: 'id_usuario' }],
        },
        {
          name: 'web_usuarios_puntos_FK',
          using: 'BTREE',
          fields: [{ name: 'id_empresa' }],
        },
      ],
    }
  );
};
