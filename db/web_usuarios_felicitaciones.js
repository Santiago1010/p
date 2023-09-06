const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_usuarios_felicitaciones',
    {
      id_usuario_felicitacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_usuario_origen: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_usuario_destino: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      punto_redimido: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: '0 = No, 1 = Si',
      },
      id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'web_usuarios_felicitaciones',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_usuario_felicitacion' }],
        },
        {
          name: 'id_usuario_origen_id_usuario_destino',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_usuario_origen' }, { name: 'id_usuario_destino' }],
        },
        {
          name: 'FK_web_usuarios_felicitaciones_web_usuarios_2',
          using: 'BTREE',
          fields: [{ name: 'id_usuario_destino' }],
        },
        {
          name: 'web_usuarios_felicitaciones_FK',
          using: 'BTREE',
          fields: [{ name: 'id_empresa' }],
        },
      ],
    }
  );
};
