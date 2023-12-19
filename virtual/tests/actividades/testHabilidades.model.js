'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_habilidades';
const MODEL_NAME = 'testHabilidades';

const Schema = {
  idHabilidad: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_habilidad',
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  default: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
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
      as: 'actividadesConfiguracion',
      foreignKey: 'idHabilidad',
    });
    this.hasMany(models.webSuscripcionesTestHabilidades, {
      as: 'suscripcionesTestHabilidades',
      foreignKey: 'idHabilidad',
    });
    this.belongsToMany(models.webSuscripciones, {
      through: { model: models.webSuscripcionesTestHabilidades },
      as: 'suscripciones',
      foreignKey: 'idHabilidad',
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
