const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_cursos_instructores',
    {
      id_curso_instructor: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_curso: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_cursos',
          key: 'id_curso',
        },
      },
      id_instructor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_instructores',
          key: 'id_instructor',
        },
      },
      tipo_contrato: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_cursos_modelos_contratos',
          key: 'id',
        },
      },
      firma_contrato: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'web_cursos_instructores',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_curso_instructor' }],
        },
        {
          name: 'id_curso_id_instructor',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_curso' }, { name: 'id_instructor' }],
        },
        {
          name: 'FK_web_cursos_instructores_web_instructores',
          using: 'BTREE',
          fields: [{ name: 'id_instructor' }],
        },
        {
          name: 'web_cursos_instructores_FK',
          using: 'BTREE',
          fields: [{ name: 'tipo_contrato' }],
        },
      ],
    }
  );
};
