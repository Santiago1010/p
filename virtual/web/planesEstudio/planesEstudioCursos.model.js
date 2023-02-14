'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_planes_estudio_cursos';
const MODEL_NAME = 'webPlanesEstudioCursos';

const Schema = {
  idPlanesCursos: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_planes_cursos',
  },
  idPlanEstudio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_planes_estudio',
      key: 'id_plan_estudio',
    },
    field: 'id_plan_estudio',
    unique: 'plan_estudio_curso_unique',
  },
  idCurso: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_cursos',
      key: 'id_curso',
    },
    field: 'id_curso',
    unique: 'plan_estudio_curso_unique',
  },
  orden: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webPlanesEstudio, { as: 'planEstudio', foreignKey: 'idPlanEstudio' });
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
