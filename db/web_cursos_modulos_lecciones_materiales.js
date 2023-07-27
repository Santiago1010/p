const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_cursos_modulos_lecciones_materiales',
    {
      id_curso_modulo_leccion_material: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_curso_modulo_leccion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_cursos_modulos_lecciones',
          key: 'id_curso_modulo_leccion',
        },
      },
      nombre_material: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      tipo_material: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
      url_material: {
        type: DataTypes.STRING(100),
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
      tableName: 'web_cursos_modulos_lecciones_materiales',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_curso_modulo_leccion_material' }],
        },
        {
          name: 'web_cursos_modulos_lecciones_materiales_FK',
          using: 'BTREE',
          fields: [{ name: 'id_curso_modulo_leccion' }],
        },
      ],
    }
  );
};
