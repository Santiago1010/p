'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'pla_evaluaciones_configuracion';
const MODEL_NAME = 'plaEvaluacionesConfiguracion';

const Schema = {
  idConfiguracion: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_configuracion',
  },
  idAnio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'config_anios',
      key: 'id',
    },
    field: 'id_anio',
  },
  idEvaluacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pla_evaluaciones',
      key: 'id_evaluacion',
    },
    field: 'id_evaluacion',
  },
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'fecha_inicio',
  },
  fechaFinAuto: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    comment: 'Fecha fin de autoevaluacion',
    field: 'fecha_fin_auto',
  },
  fechaFinEva: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    comment: 'Fecha fin de evaluacion',
    field: 'fecha_fin_eva',
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
    this.hasMany(models.plaGruposEvaluacion, { as: 'gruposEvaluacion', foreignKey: 'idConfiguracion' });
    this.belongsToMany(models.plaGrupos, {
      through: { model: models.plaGruposEvaluacion },
      as: 'grupos',
      foreignKey: 'idConfiguracion',
    });
    this.belongsTo(models.plaEvaluaciones, { as: 'evaluacion', foreignKey: 'idEvaluacion' });
    this.belongsTo(models.configAnios, { as: 'anio', foreignKey: 'idAnio' });
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
