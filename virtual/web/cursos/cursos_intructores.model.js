'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_cursos_instructores';
const MODEL_NAME = 'webCursosInstructores';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_curso_instructor',
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
  idInstructor: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_instructores',
      key: 'id_instructor',
    },
    field: 'id_instructor',
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
  static associate(models) {}

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
