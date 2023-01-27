'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../../../../config');

const TABLE_NAME = 'web_cursos';
const MODEL_NAME = 'webCursos';

const Schema = {
  idCurso: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_curso',
  },
  idCategoria: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_cursos_categorias',
      key: 'id_curso_categoria',
    },
    field: 'id_curso_categoria',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'nombre_curso',
  },
  h1: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'h1_curso',
  },
  url: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'url_curso',
  },
  metatitle: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'metatitle_curso',
  },
  subtitulo: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'subtitulo_curso',
  },
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'descripcion_curso',
  },
  descripcionEspecifico: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'descripcion_especifico_curso',
  },
  keywordsEspecifico: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'keywords_especifico_curso',
  },
  audiencia: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'audiencia_curso',
  },
  incluye: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'incluye_curso',
  },
  criterio: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'criterio_curso',
  },
  objetivos: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'objetivos_curso',
  },
  requisitos: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'requisitos_curso',
  },
  beneficios: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'beneficios_curso',
  },
  cover: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'cover_curso',
    get() {
      const imageLocation = this.getDataValue('cover');
      const hostImage = config.images.host;
      if (!imageLocation) {
        return null;
      }
      return `${hostImage}${imageLocation}`;
    },
  },
  estado: {
    type: DataTypes.TINYINT.UNSIGNED,
    defaultValue: 1,
    comment: '0:Inactivo, 1:Activo',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.hasOne(models.webRutasAprendizajeCursosUsuarios, { as: 'progresoUsuario', foreignKey: 'idCurso' });
    this.belongsToMany(models.webRutasAprendizaje, {
      through: { model: models.webRutasAprendizajeCursos },
      as: 'rutasAprendizaje',
      foreignKey: 'idCurso',
    });
    this.belongsToMany(models.webInstructores, {
      through: { model: models.webCursosInstructores },
      as: 'instructores',
      foreignKey: 'idCurso',
    });
    this.belongsToMany(models.webPlanesEstudio, {
      through: { model: models.webPlanesEstudioCursos },
      as: 'planesEstudio',
      foreignKey: 'idCurso',
    });

    this.belongsTo(models.webCursosCategorias, { as: 'categoria', foreignKey: 'idCategoria' });
    this.hasMany(models.webCursosModulos, { as: 'modulos', foreignKey: 'idCurso' });

    this.hasMany(models.webCursosQuiz, { as: 'quiz', foreignKey: 'idCurso' });

    this.hasMany(models.webCursosCertificados, { as: 'certificados', foreignKey: 'idCurso' });

    this.hasMany(models.webCursosRating, { as: 'ratingCursos', foreignKey: 'idCurso' });
    this.hasMany(models.webCursosProgresoUsuarios, { as: 'progresoUsuarios', foreignKey: 'idCurso' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: MODEL_NAME,
      timestamps: false,
    };
  }
}

module.exports = { Schema, ExtendedModel };
