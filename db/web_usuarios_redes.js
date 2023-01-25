const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_usuarios_redes',
    {
      id_usuario_red: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_red: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_redes_sociales',
          key: 'id_red',
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
