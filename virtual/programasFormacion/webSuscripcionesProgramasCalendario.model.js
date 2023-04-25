'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones_programas_calendario';
const MODEL_NAME = 'webSuscripcionesProgramasCalendario';

const Schema = {
  idCalendario: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_programa_calendario',
  },
  idSuscripcionProgFormacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    references: {
      model: 'web_suscripciones_programas_formacion',
      key: 'id_suscripcion_programa_formacion',
    },
    field: 'id_suscripcion_prog_formacion',
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.STRING(300),
    allowNull: true,
  },
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATEONLY,
    allowNull: true,
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
    this.hasMany(models.webSuscripcionesProgramasCalendarioDetalle, {
      as: 'cronogramas',
      foreignKey: 'idCalendario',
    });
    this.belongsTo(models.webSuscripcionesProgramasFormacion, {
      as: 'suscripcionProgramaFormacion',
      foreignKey: 'idSuscripcionProgFormacion',
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
