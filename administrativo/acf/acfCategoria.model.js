'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_categoria';
const MODEL_NAME = 'acfCategoria';

const Schema = {
  idCategoria: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_categoria',
  },
  nombre: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
  idArea: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_areas',
      key: 'id_area',
    },
    field: 'id_area',
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
    this.belongsTo(models.acfAreas, { as: 'area', foreignKey: 'idArea' });
    this.hasMany(models.acfEquipos, { as: 'equipos', foreignKey: 'idCategoria' });
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
