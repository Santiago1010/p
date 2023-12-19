'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_programas_formacion';
const MODEL_NAME = 'webProgramasFormacion';

const Schema = {
  idProgramaFormacion: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_programa_formacion',
  },
  idCategoria: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_programas_formacion_categoria',
      key: 'id_programa_formacion_categoria',
    },
    field: 'id_programa_formacion_categoria',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'nombre_programa_formacion',
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
    this.hasMany(models.webProgramasFormacionModulos, { as: 'modulos', foreignKey: 'idPrograma' });
    this.belongsTo(models.webProgramasFormacionCategoria, {
      as: 'categoria',
      foreignKey: 'idCategoria',
    });
    this.hasMany(models.webSuscripcionesProgramasFormacion, {
      as: 'suscripcionesProgramasFormacion',
      foreignKey: 'idProgramaFormacion',
    });
    this.belongsToMany(models.webSuscripciones, {
      through: { model: models.webSuscripcionesProgramasFormacion },
      as: 'suscripciones',
      foreignKey: 'idProgramaFormacion',
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
