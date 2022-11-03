const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_cursos_quiz', {
    id_quiz: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_cursos',
        key: 'id_curso'
      }
    },
    id_curso_modulo_leccion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_cursos_modulos_lecciones',
        key: 'id_curso_modulo_leccion'
      }
    },
    id_test_general: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'test_general',
        key: 'id'
      }
    },
    tiempo: {
      type: DataTypes.TIME,
      allowNull: true
    },
    preguntas_visibles: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puntaje_maximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    puntaje_aprobacion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    addusr: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    addfch: {
      type: DataTypes.DATE,
      allowNull: true
    },
    esquema_pregunta: {
      type: DataTypes.ENUM('unicas','variables'),
      allowNull: true
    },
    puntaje_minimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_cursos_quiz',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_quiz" },
        ]
      },
      {
        name: "FK_web_cursos_quiz_web_cursos_modulos_lecciones",
        using: "BTREE",
        fields: [
          { name: "id_curso_modulo_leccion" },
        ]
      },
      {
        name: "FK_web_cursos_quiz_test_general",
        using: "BTREE",
        fields: [
          { name: "id_test_general" },
        ]
      },
      {
        name: "web_cursos_quiz_FK",
        using: "BTREE",
        fields: [
          { name: "id_curso" },
        ]
      },
    ]
  });
};
