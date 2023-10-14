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
    autoIncrement: true,
  },
  idCategoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_cursos_categorias',
      key: 'id_curso_categoria',
    },
    field: 'id_curso_categoria',
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false,
    field: 'nombre_curso',
  },
  h1: {
    type: DataTypes.STRING(150),
    allowNull: true,
    field: 'h1_curso',
  },
  url: {
    type: DataTypes.STRING(150),
    allowNull: true,
    field: 'url_curso',
  },
  metatitle: {
    type: DataTypes.STRING(150),
    allowNull: true,
    field: 'metatitle_curso',
  },
  subtitulo: {
    type: DataTypes.STRING(150),
    allowNull: true,
    field: 'subtitulo_curso',
  },
  descripcion: {
    type: DataTypes.STRING(500),
    allowNull: false,
    field: 'descripcion_curso',
  },
  metadescripcion: {
    type: DataTypes.STRING(150),
    allowNull: true,
    field: 'descripcion_especifico_curso',
  },
  keywordsEspecifico: {
    type: DataTypes.STRING(150),
    allowNull: true,
    field: 'keywords_especifico_curso',
  },
  audiencia: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'audiencia_curso',
    get() {
      return JSON.parse(this.getDataValue('audiencia'));
    },
  },
  incluye: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'incluye_curso',
    get() {
      return JSON.parse(this.getDataValue('incluye'));
    },
  },
  /*criterio: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'criterio_curso',
  },
  objetivos: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'objetivos_curso',
  },*/
  requisitos: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'requisitos_curso',
    get() {
      return JSON.parse(this.getDataValue('requisitos'));
    },
  },
  beneficios: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'beneficios_curso',
    get() {
      return JSON.parse(this.getDataValue('beneficios'));
    },
  },
  cover: {
    type: DataTypes.STRING(100),
    allowNull: false,
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
    allowNull: false,
    comment: '0:Inactivo, 1:Activo, 2:No publicado',
  },
  estadoString: {
    type: DataTypes.VIRTUAL,
    get() {
      const dicEstado = {
        0: 'Inactivo',
        1: 'Activo',
        2: 'No publicado',
      };
      const estado = this.getDataValue('estado');
      return dicEstado[estado] || 'Invalido';
    },
  },
  precio: {
    type: DataTypes.INTEGER(11),
    allowNull: true,
    field: 'precio_curso',
  },
  duracion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: 'duracion_curso',
  },
  idioma: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: 'Español',
    field: 'idioma_curso',
  },
  videoIntroductorio: {
    type: DataTypes.STRING(100),
    field: 'video_introductorio_curso',
  },
  nivel: {
    type: DataTypes.ENUM('Básico', 'Intermedio', 'avanzado'),
    allowNull: false,
    defaultValue: 'Básico',
    field: 'nivel_curso',
  },
  origen: {
    type: DataTypes.ENUM('Propio', 'Externo'),
    allowNull: false,
    defaultValue: 'Propio',
    field: 'origen_curso',
  },
  fechaLanzamiento: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'fecha_curso',
  },
  fechaAdd: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
    field: 'fecha_add',
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
    this.belongsToMany(models.webRetos, {
      through: { model: models.webRetosCursos },
      as: 'retos',
      foreignKey: 'idCurso',
    });

    this.belongsTo(models.webCursosCategorias, { as: 'categoria', foreignKey: 'idCategoria' });
    this.hasMany(models.webCursosModulos, { as: 'modulos', foreignKey: 'idCurso' });

    this.hasMany(models.webCursosQuiz, { as: 'quiz', foreignKey: 'idCurso' });

    this.hasMany(models.webCursosCertificados, { as: 'cursosCertificados', foreignKey: 'idCurso' });

    this.belongsToMany(models.webCertificados, {
      through: { model: models.webCursosCertificados },
      as: 'certificados',
      foreignKey: 'idCurso',
    });
    this.hasMany(models.webCursosRating, { as: 'ratingCursos', foreignKey: 'idCurso' });
    this.hasMany(models.webCursosProgresoUsuarios, { as: 'progresoUsuarios', foreignKey: 'idCurso' });
    this.hasMany(models.testActividadesRecursos, { as: 'actividadesRecursos', foreignKey: 'idCurso' });
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
