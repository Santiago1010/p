'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones_curriculos_grupos_asistencias';
const MODEL_NAME = 'webSuscripcionesCurriculosGruposAsistencias';

const Schema = {
  idSuscripcionCurriculoGrupoAsistencia: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_suscripcion_curriculo_grupo_asistencia',
  },
  idSuscripcionCurriculoGrupoCronograma: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_suscripciones_curriculos_grupos_cronograma',
      key: 'id_suscripcion_curriculo_grupo_cronograma',
    },
    field: 'id_suscripcion_curriculo_grupo_cronograma',
    unique: 'web_suscripciones_curriculos_grupos_asistencias_UN',
  },
  idSuscripcionCurriculoEstudiante: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_suscripciones_curriculos_estudiantes',
      key: 'id_suscripcion_curriculo_estudiante',
    },
    field: 'id_suscripcion_curriculo_estudiante',
    unique: 'web_suscripciones_curriculos_grupos_asistencias_UN',
  },
  estadoAsistencia: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
    comment: '0=No asistio,1=asistio, 2=con excusa',
    field: 'estado_asistencia',
  },
  estadoString: {
    type: DataTypes.VIRTUAL,
    get() {
      const dicEstado = {
        0: 'No asistio',
        1: 'Asistio',
        2: 'Con Escusa',
      };
      const estado = this.getDataValue('estadoAsistencia');
      return dicEstado[estado] || 'Invalido';
    },
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
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
    this.belongsTo(models.webSuscripcionesCurriculosEstudiantes, {
      as: 'estudiante',
      foreignKey: 'idSuscripcionCurriculoEstudiante',
    });
    this.belongsTo(models.webSuscripcionesCurriculosGruposCronograma, {
      as: 'cronograma',
      foreignKey: 'idSuscripcionCurriculoGrupoCronograma',
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
