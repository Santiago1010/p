const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_cursos_modulos_lecciones_respreguntas', {
    id_cursos_modulos_lecciones_respreguntas: {
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
    id_curso_modulo_leccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_cursos_modulos_lecciones',
        key: 'id_curso_modulo_leccion'
      }
    },
    id_pregunta_opcion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'test_opciones',
        key: 'id'
      }
    },
    codpre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'test_preguntas',
        key: 'codpre'
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
          { name: "id_cursos_modulos_lecciones_respreguntas" },
        ]
      },
      {
        name: "web_cursos_modulos_lecciones_respreguntas_FK",
        using: "BTREE",
        fields: [
          { name: "id_web_usuario" },
        ]
      },
      {
        name: "web_cursos_modulos_lecciones_respreguntas_FK_1",
        using: "BTREE",
        fields: [
          { name: "codpre" },
        ]
      },
      {
        name: "web_cursos_modulos_lecciones_respreguntas_FK_2",
        using: "BTREE",
        fields: [
          { name: "id_pregunta_opcion" },
        ]
      },
      {
        name: "web_cursos_modulos_lecciones_respreguntas_FK_3",
        using: "BTREE",
        fields: [
          { name: "id_curso_modulo_leccion" },
        ]
      },
    ]
  });
};
