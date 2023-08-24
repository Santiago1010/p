'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_areas';
const MODEL_NAME = 'acfAreas';

const Schema = {
  idArea: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_area',
  },
  nombre: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
  tipo: {
    type: DataTypes.ENUM('activo', 'herramienta'),
    allowNull: false,
    defaultValue: 'activo',
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
    this.hasMany(models.acfAreasResponsables, { as: 'areasResponsables', foreignKey: 'idArea' });
    this.belongsToMany(models.admEmpleados, {
      through: { model: models.acfAreasResponsables },
      as: 'responsables',
      foreignKey: 'idArea',
    });
    this.hasMany(models.acfEquipos, { as: 'equipos', foreignKey: 'idArea' });
    this.hasMany(models.acfCategoria, { as: 'categorias', foreignKey: 'idArea' });
    this.hasMany(models.acfHerramientas, { as: 'herramientas', foreignKey: 'idArea' });
    this.hasMany(models.acfPlanMantenimiento, { as: 'planesMantenimiento', foreignKey: 'idArea' });
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
