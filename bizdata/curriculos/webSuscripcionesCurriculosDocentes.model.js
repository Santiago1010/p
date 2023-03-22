'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones_curriculos_docentes';
const MODEL_NAME = 'webSuscripcionesCurriculosDocentes';

const Schema = {
  idSuscripcionCurriculoDocente: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_suscripcion_curriculo_docente',
  },
  idSuscripcionCurriculoGrupo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_suscripciones_curriculos_grupos',
      key: 'id_suscripcion_curriculo_grupo',
    },
    field: 'id_suscripcion_curriculo_grupo',
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'biz_usuarios',
      key: 'id',
    },
    field: 'id_usuario',
  },
  estado: {
    type: DataTypes.TINYINT,
    allowNull: false,
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
    this.belongsTo(models.bizUsuarios, { as: 'bizUsuario', foreignKey: 'idUsuario' });
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
