const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_cursos_comunidad_comentarios', {
    id_curso_comunidad_comentario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_curso_comunidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_cursos_comunidad',
        key: 'id_curso_comunidad'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_usuarios',
        key: 'id_usuario'
      }
    },
    comentario: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'web_cursos_comunidad_comentarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_curso_comunidad_comentario" },
        ]
      },
      {
        name: "web_cursos_comunidad_comentarios_FK_1",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "web_cursos_comunidad_comentarios_FK",
        using: "BTREE",
        fields: [
          { name: "id_curso_comunidad" },
        ]
      },
    ]
  });
};
