'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('./../../../../../config');

const TABLE_NAME = 'web_cursos_modulos_lecciones_parrafos';
const MODEL_NAME = 'webCursosModulosLeccionesParrafos';

const Schema = {
  idParrafo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id_web_curso_modulo_leccion_parrafo',
  },
  idLeccion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_curso_modulo_leccion',
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  parrafo: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  parrafo2: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  imagetext: {
    type: DataTypes.TEXT,
    allowNull: true,
    get() {
      const objeImageText = JSON.parse(this.getDataValue('imagetext'));
      if (!objeImageText) {
        return null;
      }
      const imageLocation = objeImageText?.imagen;
      const hostImage = config.images.host;
      if (!imageLocation) {
        objeImageText.imagen = null;
      } else {
        objeImageText.imagen = `${hostImage}${imageLocation}`;
      }

      return objeImageText;
    },
  },
  imagen: {
    type: DataTypes.STRING(255),
    allowNull: true,
    get() {
      const imageLocation = this.getDataValue('imagen');
      const hostImage = config.images.host;
      if (!imageLocation) {
        return null;
      }
      return `${hostImage}${imageLocation}`;
    },
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
    allowNull: false,
  },
  deletedAt: {
    field: 'deleted_at',
    type: DataTypes.DATE,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webCursosModulosLecciones, { as: 'leccion', foreignKey: 'idLeccion' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: MODEL_NAME,
      timestamps: true,
      paranoid: true,
    };
  }
}

module.exports = { Schema, ExtendedModel };
