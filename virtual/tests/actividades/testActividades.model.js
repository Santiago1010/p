'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_actividades';
const MODEL_NAME = 'testActividades';

const Schema = {
  idActividad: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_actividad',
  },
  titulo: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  logro: {
    type: DataTypes.STRING(255),
    allowNull: false,
    comment: 'Mensaje de logro al completar la actividad',
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
    this.hasMany(models.testActividadesConfiguracion, {
      as: 'configuraciones',
      foreignKey: 'idActividad',
    });
    this.hasMany(models.testActividadesRecursos, { as: 'recursos', foreignKey: 'idActividad' });
    this.belongsToMany(models.testCerebros, {
      through: { model: models.testActividadesConfiguracion },
      as: 'cerebros',
      foreignKey: 'idActividad',
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
