const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_cursos_certificados',
    {
      id_curso_certificado: {
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
      id_certificado: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_certificados',
          key: 'id_certificado',
        },
      },
      estado: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: 'web_cursos_certificados',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_curso_certificado' }],
        },
        {
          name: 'web_cursos_certificados_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_curso' }, { name: 'id_certificado' }],
        },
        {
          name: 'web_cursos_certificados_FK_1',
          using: 'BTREE',
          fields: [{ name: 'id_certificado' }],
        },
      ],
    }
  );
};
