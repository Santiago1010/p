'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones_curriculos_estudiantes';
const MODEL_NAME = 'webSuscripcionesCurriculosEstudiantes';

const Schema = {
  idSuscripcionCurriculoEstudiante: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_suscripcion_curriculo_estudiante',
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
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_usuarios',
      key: 'id_usuario',
    },
    field: 'id_usuario',
  },
  estado: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: 1,
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
    this.belongsTo(models.webSuscripcionesCurriculosGrupos, {
      as: 'curriculoGrupo',
      foreignKey: 'idSuscripcionCurriculoGrupo',
    });
    this.belongsTo(models.webUsuarios, { as: 'usuario', foreignKey: 'idUsuario' });
    this.hasMany(models.webSuscripcionesCurriculosGruposAsistencias, {
      as: 'asistencias',
      foreignKey: 'idSuscripcionCurriculoEstudiante',
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
