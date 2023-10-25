'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'pla_resgeneral';
const MODEL_NAME = 'plaResgeneral';

const Schema = {
  idResgeneral: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_resgeneral',
  },
  idEvalGrupos: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pla_grupos_evaluacion',
      key: 'id_eval_grupos',
    },
    field: 'id_eval_grupos',
  },
  idEvaluado: {
    type: DataTypes.STRING(30),
    allowNull: false,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_evaluado',
  },
  idEvaluador: {
    type: DataTypes.STRING(30),
    allowNull: false,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_evaluador',
  },
  puntajeTotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'puntaje_total',
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
    this.belongsTo(models.plaGruposEvaluacion, { as: 'grupoEvaluacion', foreignKey: 'idEvalGrupos' });
    this.belongsTo(models.admEmpleados, { as: 'evaluador', foreignKey: 'idEvaluador' });
    this.belongsTo(models.admEmpleados, { as: 'evaluado', foreignKey: 'idEvaluado' });
    this.hasMany(models.plaResdetalle, { as: 'resdetalles', foreignKey: 'idResgeneral' });
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
