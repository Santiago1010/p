const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_retos_cursos',
    {
      id_reto_curso: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_reto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_retos',
          key: 'id_reto',
        },
      },
      id_curso: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_cursos',
          key: 'id_curso',
        },
      },
    },
    {
      sequelize,
      tableName: 'web_retos_cursos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_reto_curso' }],
        },
        {
          name: 'id_reto',
          using: 'BTREE',
          fields: [{ name: 'id_reto' }],
        },
        {
          name: 'id_curso',
          using: 'BTREE',
          fields: [{ name: 'id_curso' }],
        },
      ],
    }
  );
};
