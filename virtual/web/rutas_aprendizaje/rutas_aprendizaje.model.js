'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../../../../config');

const TABLE_NAME = 'web_rutas_aprendizaje';
const MODEL_NAME = 'webRutasAprendizaje';

const Schema = {
  idRuta: {
    field: 'id_ruta_aprendizaje',
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  idCategoria: {
    field: 'id_ruta_aprendizaje_categoria',
    type: DataTypes.INTEGER,
    comment: 'null: ruta autogestionada',
    references: {
      model: 'web_rutas_aprendizaje_categorias',
      key: 'id_ruta_aprendizaje_categoria',
    },
  },
  nombre: {
    field: 'nombre_ruta_aprendizaje',
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  idNivel: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_rutas_aprendizaje_niveles',
      key: 'id_web_ruta_aprendizaje_nivel',
    },
    field: 'id_ruta_aprendizaje_nivel',
  },
  logo: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'logo_ruta_aprendizaje',
    get() {
      const imageLocation = this.getDataValue('logo');
      const hostImage = config.images.host;
      if (!imageLocation) {
        return null;
      }
      return `${hostImage}${imageLocation}`;
    },
  },
  color: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'color_ruta_aprendizaje',
  },
  colorTexto: {
    type: DataTypes.STRING(15),
    allowNull: true,
    field: 'color_texto',
  },
  paraQuien: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'para_quien_ruta_aprendizaje',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webRutasAprendizajeCategorias, { as: 'categoria', foreignKey: 'idCategoria' });
    this.hasMany(models.webSuscripcionesRutasAprendizaje, {
      as: 'suscripcionesRutas',
      foreignKey: 'idRutaAprendizaje',
    });
    this.belongsToMany(models.webSuscripciones, {
      through: { model: models.webSuscripcionesRutasAprendizaje },
      as: 'suscripciones',
      foreignKey: 'idRutaAprendizaje',
    });
    this.belongsToMany(models.webCursos, {
      through: { model: models.webRutasAprendizajeCursos },
      as: 'cursos',
      foreignKey: 'idRutaAprendizaje',
    });
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
