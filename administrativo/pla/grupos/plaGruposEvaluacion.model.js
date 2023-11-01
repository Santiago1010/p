'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'pla_grupos_evaluacion';
const MODEL_NAME = 'plaGruposEvaluacion';

const Schema = {
  idEvalGrupos: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_eval_grupos',
  },
  idGrupo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pla_grupos',
      key: 'id_grupo',
    },
    field: 'id_grupo',
  },
  idConfiguracion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pla_evaluaciones_configuracion',
      key: 'id_configuracion',
    },
    field: 'id_configuracion',
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
    this.belongsTo(models.plaEvaluacionesConfiguracion, {
      as: 'evaluacionConfiguracion',
      foreignKey: 'idConfiguracion',
    });
    this.belongsTo(models.plaGrupos, { as: 'grupo', foreignKey: 'idGrupo' });
    this.hasMany(models.plaResgeneral, { as: 'resgenerales', foreignKey: 'idEvalGrupos' });
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
