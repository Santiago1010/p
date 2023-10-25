'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'pla_indicador_opciones';
const MODEL_NAME = 'plaIndicadorOpciones';

const Schema = {
  idIndicadorOpcion: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_indicador_opcion',
  },
  idIndicador: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pla_indicadores',
      key: 'id_indicador',
    },
    field: 'id_indicador',
  },
  idOpcion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pla_opciones',
      key: 'id_opcion',
    },
    field: 'id_opcion',
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
    this.hasMany(models.plaResdetalle, { as: 'resdetalles', foreignKey: 'idIndicadorOpcion' });
    this.belongsTo(models.plaIndicadores, { as: 'indicador', foreignKey: 'idIndicador' });
    this.belongsTo(models.plaOpciones, { as: 'opcion', foreignKey: 'idOpcion' });
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
