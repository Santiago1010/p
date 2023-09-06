const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_usuarios_redes',
    {
      id_usuario_red: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_red: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_web_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      username: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'web_usuarios_redes',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_usuario_red' }],
        },
        {
          name: 'red_usuario_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_red' }, { name: 'id_web_usuario' }],
        },
        {
          name: 'FK_web_usuarios_redes_web_usuarios',
          using: 'BTREE',
          fields: [{ name: 'id_web_usuario' }],
        },
      ],
    }
  );
};
