'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones_curriculos';
const MODEL_NAME = 'webSuscripcionesCurriculos';

const Schema = {
  idSuscripcionCurriculo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id_suscripcion_curriculo',
  },
  idSuscripcion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_suscripciones',
      key: 'id_suscripcion',
    },
    field: 'id_suscripcion',
  },
  idCurriculo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_curriculos',
      key: 'id_curriculo',
    },
    field: 'id_curriculo',
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.webSuscripcionesCurriculosGrupos, {
      as: 'curriculosGrupos',
      foreignKey: 'idSuscripcionCurriculo',
    });
    this.belongsTo(models.webSuscripciones, {
      as: 'suscripciones',
      foreignKey: 'idSuscripcion',
    });
    this.belongsTo(models.webCurriculos, {
      as: 'curriculo',
      foreignKey: 'idCurriculo',
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
