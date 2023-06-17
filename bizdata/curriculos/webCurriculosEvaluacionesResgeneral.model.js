'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_curriculos_evaluaciones_resgeneral';
const MODEL_NAME = 'webCurriculosEvaluacionesResgeneral';

const Schema = {
  idResgeneral: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_resgeneral',
  },
  idEvaluacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_curriculos_evaluaciones',
      key: 'id_evaluacion',
    },
    field: 'id_evaluacion',
  },
  idWebUsuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Respuesta estudiante evaluación de referencia',
    references: {
      model: 'web_usuarios',
      key: 'id_usuario',
    },
    field: 'id_web_usuario',
  },
  idBizUsuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Respuesta docente evaluación de seguimiento',
    references: {
      model: 'biz_usuarios',
      key: 'id',
    },
    field: 'id_biz_usuario',
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
    this.belongsTo(models.bizUsuarios, { as: 'bizUsuario', foreignKey: 'idBizUsuario' });
    this.belongsTo(models.webUsuarios, { as: 'webUsuario', foreignKey: 'idWebUsuario' });
    this.belongsTo(models.webCurriculosEvaluaciones, { as: 'evaluacion', foreignKey: 'idEvaluacion' });
    this.hasMany(models.webCurriculosEvaluacionesResdetalle, { as: 'resdetalle', foreignKey: 'idResgeneral' });
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
