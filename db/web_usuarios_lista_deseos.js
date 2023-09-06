const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_usuarios_lista_deseos',
    {
      id_usuario_lista_deseo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_ruta_aprendizaje: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'web_usuarios_lista_deseos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_usuario_lista_deseo' }],
        },
        {
          name: 'id_usuario_id_ruta_aprendizaje',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_usuario' }, { name: 'id_ruta_aprendizaje' }],
        },
        {
          name: 'FK_web_usuarios_lista_deseos_web_rutas_aprendizaje',
          using: 'BTREE',
          fields: [{ name: 'id_ruta_aprendizaje' }],
        },
        {
          name: 'web_usuarios_lista_deseos_FK',
          using: 'BTREE',
          fields: [{ name: 'id_empresa' }],
        },
      ],
    }
  );
};
