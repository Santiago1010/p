'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones_curriculos_ciclos';
const MODEL_NAME = 'webSuscripcionesCurriculosCiclos';

const Schema = {
  idSuscripcionCurriculoCiclo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_suscripcion_curriculo_ciclo',
  },
  nombreCiclo: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
    field: 'nombre_ciclo',
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
    this.hasMany(models.webSuscripcionesCurriculosGrupos, {
      as: 'curriculosGrupos',
      foreignKey: 'idSuscripcionCurriculoCiclo',
    });
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
