const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_cursos_comunidad_likes',
    {
      id_curso_comunidad_like: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_usuarios',
          key: 'id_usuario',
        },
      },
      id_curso_comunidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_cursos_comunidad',
          key: 'id_curso_comunidad',
        },
      },
    },
    {
      sequelize,
      tableName: 'web_cursos_comunidad_likes',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_curso_comunidad_like' }],
        },
        {
          name: 'usuario_likes_comunidad_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_usuario' }, { name: 'id_curso_comunidad' }],
        },
        {
          name: 'id_curso_comunidad',
          using: 'BTREE',
          fields: [{ name: 'id_curso_comunidad' }],
        },
      ],
    }
  );
};
