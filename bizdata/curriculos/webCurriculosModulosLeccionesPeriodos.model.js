'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_curriculos_modulos_lecciones_periodos';
const MODEL_NAME = 'webCurriculosModulosLeccionesPeriodos';

const Schema = {
  idLeccionPeriodo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_leccion_periodo',
  },
  idPeriodo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_suscripciones_curriculos_periodos',
      key: 'id_periodo',
    },
    field: 'id_periodo',
  },
  idLeccion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_curriculos_modulos_lecciones',
      key: 'id_leccion_curriculo',
    },
    field: 'id_leccion',
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
    this.belongsTo(models.webCurriculosModulosLecciones, {
      as: 'leccion',
      foreignKey: 'idLeccion',
    });

    this.belongsTo(models.webSuscripcionesCurriculosPeriodos, {
      as: 'periodo',
      foreignKey: 'idPeriodo',
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
