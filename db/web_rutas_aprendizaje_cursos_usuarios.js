const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_rutas_aprendizaje_cursos_usuarios', {
    id_web_ruta_aprendizaje_curso_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_web_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_usuarios',
        key: 'id_usuario'
      }
    },
    id_web_curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_cursos',
        key: 'id_curso'
      }
    },
    estado_curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0 =  Pendiente, 1 = Progreso, 2 =  Finalizado, 3 = Aprobado"
    },
    fecha_aprobado: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Fecha de aprobación del curso"
    }
  }, {
    sequelize,
    tableName: 'web_rutas_aprendizaje_cursos_usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_web_ruta_aprendizaje_curso_usuario" },
        ]
      },
      {
        name: "web_rutas_aprendizaje_cursos_usuarios_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_web_usuario" },
          { name: "id_web_curso" },
        ]
      },
      {
        name: "FK_web_rutas_aprendizaje_cursos_usuarios_web_cursos",
        using: "BTREE",
        fields: [
          { name: "id_web_curso" },
        ]
      },
    ]
  });
};
