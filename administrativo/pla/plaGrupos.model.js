'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'pla_grupos';
const MODEL_NAME = 'plaGrupos';

const Schema = {
  idGrupo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_grupo',
  },
  nombre: {
    type: DataTypes.STRING(150),
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
    this.hasMany(models.plaGruposEvaluacion, { as: 'gruposEvaluacion', foreignKey: 'idGrupo' });
    this.hasMany(models.plaGruposUsuarios, { as: 'gruposUsuarios', foreignKey: 'idGrupo' });
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