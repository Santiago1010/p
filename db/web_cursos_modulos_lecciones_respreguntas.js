const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_cursos_modulos_lecciones_respreguntas', {
    id_lecciones_respreguntas: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_usuarios',
        key: 'id_usuario'
      }
    },
    id_leccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_cursos_modulos_lecciones',
        key: 'id_curso_modulo_leccion'
      }
    },
<<<<<<< HEAD
    id_opcion: {
=======
    id_pregunta: {
>>>>>>> dev_m
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'test_preguntas',
        key: 'codpre'
      }
    },
<<<<<<< HEAD
    id_pregunta: {
=======
    id_opcion: {
>>>>>>> dev_m
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'test_opciones',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'web_cursos_modulos_lecciones_respreguntas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_lecciones_respreguntas" },
        ]
      },
      {
        name: "web_cursos_modulos_lecciones_respreguntas_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
<<<<<<< HEAD
=======
          { name: "id_leccion" },
>>>>>>> dev_m
        ]
      },
      {
        name: "web_cursos_modulos_lecciones_respreguntas_FK_1",
        using: "BTREE",
        fields: [
          { name: "id_pregunta" },
        ]
      },
      {
        name: "web_cursos_modulos_lecciones_respreguntas_FK_2",
        using: "BTREE",
        fields: [
          { name: "id_opcion" },
        ]
      },
      {
        name: "web_cursos_modulos_lecciones_respreguntas_FK_3",
        using: "BTREE",
        fields: [
          { name: "id_leccion" },
        ]
      },
    ]
  });
};
