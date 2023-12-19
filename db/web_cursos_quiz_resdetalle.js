const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_cursos_quiz_resdetalle',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_quiz_resgeneral: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_cursos_quiz_resgeneral',
          key: 'id_quiz_resgeneral',
        },
      },
      id_pregunta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'test_preguntas',
          key: 'codpre',
        },
      },
      id_opcion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      puntaje: {
        type: DataTypes.DECIMAL(10, 0),
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'web_cursos_quiz_resdetalle',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'web_curso_quiz_resdetalle_resgeneral_FK',
          using: 'BTREE',
          fields: [{ name: 'id_quiz_resgeneral' }],
        },
        {
          name: 'web_curso_quiz_resdetalle_pregunta_FK',
          using: 'BTREE',
          fields: [{ name: 'id_pregunta' }],
        },
        {
          name: 'web_curso_quiz_resdetalle_FK',
          using: 'BTREE',
          fields: [{ name: 'id_opcion' }],
        },
      ],
    }
  );
};
