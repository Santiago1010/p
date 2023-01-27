'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones_curriculos_grupos_cronograma';
const MODEL_NAME = 'webSuscripcionesCurriculosGruposCronograma';

const Schema = {
  idSuscripcionCurriculoGrupoCronograma: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_suscripcion_curriculo_grupo_cronograma',
  },
  idSuscripcionCurriculoGrupo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_suscripciones_curriculos_grupos',
      key: 'id_suscripcion_curriculo_grupo',
    },
    field: 'id_suscripcion_curriculo_grupo',
  },
  descripcion: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  fechaClase: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_clase',
  },
  estado: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: 0,
    comment: '0=Pendiente, 1=Proceso, 2=Finalizado',
  },
  fechaAdd: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'fecha_add',
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webSuscripcionesCurriculosGrupos, {
      as: 'curriculoGrupo',
      foreignKey: 'idSuscripcionCurriculoGrupo',
    });
    this.hasMany(models.webSuscripcionesCurriculosGruposAsistencias, {
      as: 'asistencias',
      foreignKey: 'idSuscripcionCurriculoGrupoCronograma',
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
