'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_cursos_modulos';
const MODEL_NAME = 'webCursosModulos';

const Schema = {
  idModulo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_curso_modulo',
  },
  idCurso: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_cursos',
      key: 'id_curso',
    },
    field: 'id_curso',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'nombre_modulo',
  },
  orden: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'orden_modulo',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webCursos, { as: 'curso', foreignKey: 'idCurso' });
    this.hasMany(models.webCursosModulosLecciones, { as: 'lecciones', foreignKey: 'idModulo' });
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
