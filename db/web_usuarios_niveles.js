const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_usuarios_niveles',
    {
      id_usuario_nivel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_nivel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
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
      tableName: 'web_usuarios_niveles',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_usuario_nivel' }],
        },
        {
          name: 'FK_web_usuarios_niveles_web_usuarios',
          using: 'BTREE',
          fields: [{ name: 'id_usuario' }],
        },
        {
          name: 'FK_web_usuarios_niveles_web_niveles',
          using: 'BTREE',
          fields: [{ name: 'id_nivel' }],
        },
        {
          name: 'web_usuarios_niveles_FK',
          using: 'BTREE',
          fields: [{ name: 'id_empresa' }],
        },
      ],
    }
  );
};
