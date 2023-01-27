'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_cursos_modulos_lecciones_parrafos';
const MODEL_NAME = 'webCursosModulosLeccionesParrafos';

const Schema = {
  idParrafo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_web_curso_modulo_leccion_parrafo',
  },
  idLeccion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'id_curso_modulo_leccion',
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  parrafo: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  recurso: {
    type: DataTypes.BIGINT,
    allowNull: true,
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
      timestamps: false,
    };
  }
}

module.exports = { Schema, ExtendedModel };
