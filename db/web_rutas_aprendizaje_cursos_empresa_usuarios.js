const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_rutas_aprendizaje_cursos_empresa_usuarios', {
    id_cursos_empresa_usuarios: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_web_ruta_aprendizaje_curso_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_rutas_aprendizaje_cursos_usuarios',
        key: 'id_web_ruta_aprendizaje_curso_usuario'
      },
      unique: "web_rutas_aprendizaje_cursos_empresa_usuarios_FK"
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
    tableName: 'web_rutas_aprendizaje_cursos_empresa_usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_cursos_empresa_usuarios" },
        ]
      },
      {
        name: "web_rutas_aprendizaje_cursos_empresa_usuarios_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_web_ruta_aprendizaje_curso_usuario" },
        ]
      },
      {
        name: "web_rutas_aprendizaje_cursos_empresa_usuarios_FK_1",
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
    ]
  });
};
