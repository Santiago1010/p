const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_cursos',
    {
      id_curso: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_curso_categoria: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_cursos_categorias',
          key: 'id_curso_categoria',
        },
      },
      nombre_curso: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      h1_curso: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      url_curso: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      metatitle_curso: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      subtitulo_curso: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      descripcion_curso: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      descripcion_especifico_curso: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      keywords_especifico_curso: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      audiencia_curso: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      incluye_curso: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      criterio_curso: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      objetivos_curso: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      requisitos_curso: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      beneficios_curso: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      cover_curso: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      estado: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 1,
        comment: '0: Inactivo, 1: Activo, 2: No publicado',
      },
      precio_curso: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      duracion_curso: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: 'Duración del curso en segundos',
      },
      idioma_curso: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      video_introductorio_curso: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      nivel_curso: {
        type: DataTypes.ENUM('Básico', 'Intermedio', 'avanzado'),
        allowNull: true,
      },
      origen_curso: {
        type: DataTypes.ENUM('Propio', 'Externo'),
        allowNull: true,
      },
      fecha_curso: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      fecha_add: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      fecha_update: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'web_cursos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_curso' }],
        },
        {
          name: 'FK_web_cursos_web_cursos_categorias',
          using: 'BTREE',
          fields: [{ name: 'id_curso_categoria' }],
        },
      ],
    }
  );
};
