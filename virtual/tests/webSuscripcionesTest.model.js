'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones_test';
const MODEL_NAME = 'webSuscripcionesTest';

const Schema = {
  idSuscripcionTest: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_suscripcion_test',
  },
  idSuscripcion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_suscripciones',
      key: 'id_suscripcion',
    },
    unique: 'FK_web_suscripciones_test_web_suscripciones',
    field: 'id_suscripcion',
  },
  categoria: {
    type: DataTypes.ENUM('Basico', 'Avanzado'),
    allowNull: true,
    defaultValue: 'Basico',
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
    this.belongsTo(models.webSuscripciones, { as: 'suscripcion', foreignKey: 'idSuscripcion' });
    this.hasMany(models.webSuscripcionesTestReportes, {
      as: 'suscripcionesTestReportes',
      foreignKey: 'idSuscripcionTest',
    });
    this.belongsToMany(models.testSessionReportes, {
      through: { model: models.webSuscripcionesTestReportes },
      as: 'reportes',
      foreignKey: 'idSuscripcionTest',
    });
    this.belongsToMany(models.webEmpresasRoles, {
      through: { model: models.webSuscripcionesTestReportes },
      as: 'roles',
      foreignKey: 'idSuscripcionTest',
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
