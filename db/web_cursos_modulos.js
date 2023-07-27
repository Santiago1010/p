const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_cursos_modulos',
    {
      id_curso_modulo: {
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
      nombre_modulo: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      orden_modulo: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'web_cursos_modulos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_curso_modulo' }],
        },
        {
          name: 'FK_web_cursos_modulos_web_cursos',
          using: 'BTREE',
          fields: [{ name: 'id_curso' }],
        },
      ],
    }
  );
};
