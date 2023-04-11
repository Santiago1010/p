'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones_curriculos_periodos';
const MODEL_NAME = 'webSuscripcionesCurriculosPeriodos';

const Schema = {
  idPeriodo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_periodo',
  },
  idSuscripcionCurriculo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_suscripciones_curriculos',
      key: 'id_suscripcion_curriculo',
    },
    field: 'id_suscripcion_curriculo',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  fechaInicio: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'fecha_fin',
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
    this.belongsTo(models.webSuscripcionesCurriculos, {
      as: 'suscripcionCurriculo',
      foreignKey: 'idSuscripcionCurriculo',
    });
    this.hasMany(models.webCurriculosModulosLeccionesPeriodos, { as: 'leccionesPeriodos', foreignKey: 'idPeriodo' });
    this.belongsToMany(models.webCurriculosModulosLecciones, {
      through: { model: models.webCurriculosModulosLeccionesPeriodos },
      as: 'lecciones',
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
