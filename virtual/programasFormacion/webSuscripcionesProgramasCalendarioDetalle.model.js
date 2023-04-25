'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones_programas_calendario_detalle';
const MODEL_NAME = 'webSuscripcionesProgramasCalendarioDetalle';

const Schema = {
  idCronograma: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_programa_cronograma',
  },
  idCalendario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_suscripciones_programas_calendario',
      key: 'id_programa_calendario',
    },
    field: 'id_programa_calendario',
  },
  idCapsula: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_programas_formacion_modulos_capsulas',
      key: 'id_modulo_capsula',
    },
    field: 'id_capsula',
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  enviados: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  recibidos: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  vistos: {
    type: DataTypes.INTEGER,
    allowNull: true,
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
    this.belongsTo(models.webProgramasFormacionModulosCapsulas, {
      as: 'capsula',
      foreignKey: 'idCapsula',
    });

    this.belongsTo(models.webSuscripcionesProgramasCalendario, {
      as: 'calendario',
      foreignKey: 'idCalendario',
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
