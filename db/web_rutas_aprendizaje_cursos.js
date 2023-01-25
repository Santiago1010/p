const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_rutas_aprendizaje_cursos',
    {
      id_ruta_aprendizaje_curso: {
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
      id_ruta_aprendizaje: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_rutas_aprendizaje',
          key: 'id_ruta_aprendizaje',
        },
      },
      orden: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: 'web_rutas_aprendizaje_cursos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_ruta_aprendizaje_curso' }],
        },
        {
          name: 'id_curso_id_ruta_aprendizaje',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_curso' }, { name: 'id_ruta_aprendizaje' }],
        },
        {
          name: 'FK_web_rutas_aprendizaje_cursos_web_rutas_aprendizaje',
          using: 'BTREE',
          fields: [{ name: 'id_ruta_aprendizaje' }],
        },
      ],
    }
  );
};
