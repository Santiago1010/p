'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'pla_indicadores';
const MODEL_NAME = 'plaIndicadores';

const Schema = {
  idIndicador: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_indicador',
  },
  idCriterio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pla_criterios',
      key: 'id_criterio',
    },
    field: 'id_criterio',
  },
  descripcion: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  tipo: {
    type: DataTypes.ENUM('unica', 'multiple', 'abierta'),
    allowNull: false,
    defaultValue: 'unica',
    comment: 'Tipo de indicador analogo a una pregunta',
  },
  depende: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'pla_indicadores',
      key: 'id_indicador',
    },
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
    this.hasMany(models.plaEvaluacionesIndicadores, { as: 'evaluacionesIndicadores', foreignKey: 'idIndicador' });
    this.belongsTo(models.plaCriterios, { as: 'criterio', foreignKey: 'idCriterio' });
    this.hasMany(models.plaIndicadorOpciones, { as: 'opciones', foreignKey: 'idIndicador' });
    this.belongsTo(models.plaIndicadores, { as: 'indicadorPrincipal', foreignKey: 'depende' });
    this.hasMany(models.plaIndicadores, { as: 'subIndicadores', foreignKey: 'depende' });
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
