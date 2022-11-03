const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_cursos_progreso_empresa_usuarios', {
    id_progreso_empresa_usuarios: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_curso_progreso_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_cursos_progreso_usuarios',
        key: 'id_curso_progreso_usuario'
      },
      unique: "web_cursos_progreso_empresa_usuarios_FK_1"
    },
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_empresas',
        key: 'id_empresa'
      }
    }
  }, {
    sequelize,
    tableName: 'web_cursos_progreso_empresa_usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_progreso_empresa_usuarios" },
        ]
      },
      {
        name: "web_cursos_progreso_empresa_usuarios_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_curso_progreso_usuario" },
        ]
      },
      {
        name: "web_cursos_progreso_empresa_usuarios_FK",
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
    ]
  });
};
