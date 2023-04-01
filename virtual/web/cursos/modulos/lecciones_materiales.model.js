'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('./../../../../../config');
const TABLE_NAME = 'web_cursos_modulos_lecciones_materiales';
const MODEL_NAME = 'webCursosModulosLeccionesMateriales';

const Schema = {
  idMaterial: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_curso_modulo_leccion_material',
  },
  idLeccion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'id_curso_modulo_leccion',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'nombre_material',
  },
  tipo: {
    type: DataTypes.ENUM('video', 'imagen', 'documento'),
    allowNull: true,
    field: 'tipo_material',
  },
  url: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'url_material',
    get() {
      const tipo = this.getDataValue('tipo');
      const imageLocation = this.getDataValue('url');
      if (tipo === 'video') {
        return `${imageLocation}`;
      }

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
