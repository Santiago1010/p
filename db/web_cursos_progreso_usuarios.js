const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_cursos_progreso_usuarios', {
    id_curso_progreso_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_curso_modulo_leccion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_cursos_modulos_lecciones',
        key: 'id_curso_modulo_leccion'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_usuarios',
        key: 'id_usuario'
      }
    },
    tiempo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "En segundos"
    }
  }, {
    sequelize,
    tableName: 'web_cursos_progreso_usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_curso_progreso_usuario" },
        ]
      },
      {
        name: "id_curso_modulo_leccion_id_usuario",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_curso_modulo_leccion" },
          { name: "id_usuario" },
        ]
      },
      {
        name: "FK_web_cursos_progreso_usuarios_web_usuarios",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
};
