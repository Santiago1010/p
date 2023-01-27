'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_cerebros';
const MODEL_NAME = 'testCerebros';

const Schema = {
  nombre: DataTypes.STRING(40),
  aprende: DataTypes.STRING(40),
  alias: DataTypes.STRING(40),
  titulo: DataTypes.STRING(80),
  descripcion: DataTypes.TEXT('long'),
  descripcionSub: {
    field: 'descripcion_sub',
    type: DataTypes.TEXT('long'),
  },
  caracteristicas: {
    type: DataTypes.TEXT('long'),
    get() {
      const caracteristicas = this.getDataValue('caracteristicas');
      return caracteristicas.split('|');
    },
  },
  fortalezas: DataTypes.STRING,
  aspMejora: {
    field: 'asp_mejora',
    type: DataTypes.STRING,
  },
  nivComando: {
    field: 'niv_comando',
    type: DataTypes.TEXT,
  },
  nivSupervision: {
    field: 'niv_supervision',
    type: DataTypes.TEXT,
  },
  nivAsesoria: {
    field: 'niv_asesoria',
    type: DataTypes.TEXT,
  },
  nivEjecucion: {
    field: 'niv_ejecucion',
    type: DataTypes.TEXT,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.testActividades, { as: 'actividades', foreignKey: 'idCerebro' });
    this.hasMany(models.testSessionReporteCerebro, {
      as: 'reportesCerebroDominante',
      foreignKey: 'idCerebroDominante',
    });
    this.hasMany(models.testSessionReporteCerebro, {
      as: 'reportesCerebroSubDominante',
      foreignKey: 'idCerebroSubDominante',
    });
    this.belongsToMany(models.testRecomendaciones, {
      through: { model: models.testRecomendacionesDetalle },
      as: 'recomendaciones',
      foreignKey: 'idCerebro',
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
