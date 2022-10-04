const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_cursos_quiz_resgeneral', {
    id_quiz_resgeneral: {
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
    id_quiz: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_cursos_quiz',
        key: 'id_quiz'
      }
    },
    intentos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    puntaje: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      defaultValue: 0
    },
    tiempo: {
      type: DataTypes.TIME,
      allowNull: true
    },
    aprobado: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    id_curso_certificado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_cursos_certificados',
        key: 'id_curso_certificado'
      }
    }
  }, {
    sequelize,
    tableName: 'web_cursos_quiz_resgeneral',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_quiz_resgeneral" },
        ]
      },
      {
        name: "web_cursos_quiz_resgeneral_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
          { name: "id_quiz" },
        ]
      },
      {
        name: "web_cursos_quiz_resgeneral_FK_1",
        using: "BTREE",
        fields: [
          { name: "id_quiz" },
        ]
      },
      {
        name: "web_cursos_quiz_resgeneral_FK_2",
        using: "BTREE",
        fields: [
          { name: "id_curso_certificado" },
        ]
      },
    ]
  });
};
