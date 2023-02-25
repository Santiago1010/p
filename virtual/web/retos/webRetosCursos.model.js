'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_retos_cursos';
const MODEL_NAME = 'webRetosCursos';

const Schema = {
  idRetoCurso: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_reto_curso',
  },
  idReto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_retos',
      key: 'id_reto',
    },
    field: 'id_reto',
  },
  idCurso: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_cursos',
      key: 'id_curso',
    },
    field: 'id_curso',
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webCursos, { as: 'curso', foreignKey: 'idCurso' });
    this.belongsTo(models.webRetos, { as: 'reto', foreignKey: 'idReto' });
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
