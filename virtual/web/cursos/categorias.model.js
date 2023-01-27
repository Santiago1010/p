'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_cursos_categorias';
const MODEL_NAME = 'webCursosCategorias';

const Schema = {
  idCategoria: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_curso_categoria',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'nombre_categoria',
  },
  orden: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'orden_categoria',
  },
  activo: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  urlImagen: {
    type: DataTypes.STRING(100),
    field: 'url_imagen',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.webCursos, { as: 'cursos', foreignKey: 'idCategoria' });
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
