'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_actividades_recursos';
const MODEL_NAME = 'testActividadesRecursos';

const config = require('./../../../../config');

const Schema = {
  idRecurso: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_recurso',
  },
  idActividad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'test_actividades',
      key: 'id_actividad',
    },
    field: 'id_actividad',
    unique: 'recurso_actividad_UN',
  },
  tipo: {
    type: DataTypes.ENUM('audioVisual', 'curso', 'evaluacion', 'autoEvaluacion'),
    allowNull: false,
    defaultValue: 'audioVisual',
  },
  recurso: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null,
    comment: 'Para tipo audioVisual y se refiere al link del recurso',
    get() {
      const tipo = this.getDataValue('tipo');
      if (tipo === 'audioVisual') {
        const recurso = this.getDataValue('recurso');
        const isLink = recurso?.startsWith('http');

        if (!isLink) {
          const hostImage = config.images.host;
          return `${hostImage}${recurso}`;
        }

        return recurso;
      }
      return null;
    },
  },
  idCurso: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
    comment: 'Para tipo curso',
    references: {
      model: 'web_cursos',
      key: 'id_curso',
    },
    field: 'id_curso',
  },
  idTest: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
    comment: 'Para tipo  evaluacion o autoEvaluacion',
    references: {
      model: 'test_general',
      key: 'id',
    },
    field: 'id_test',
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
    this.belongsTo(models.testActividades, { as: 'actividad', foreignKey: 'idActividad' });
    this.belongsTo(models.webCursos, { as: 'curso', foreignKey: 'idCurso' });
    this.belongsTo(models.testGeneral, { as: 'evaluacion', foreignKey: 'idTest' });
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
