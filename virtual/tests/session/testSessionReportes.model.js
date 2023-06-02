'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_session_reportes';
const MODEL_NAME = 'testSessionReportes';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  categoria: {
    type: DataTypes.ENUM('estandar', 'especial'),
    allowNull: true,
  },
  tipo: {
    type: DataTypes.ENUM('cerebro', 'perfil'),
    allowNull: false,
    defaultValue: 'cerebro',
  },
  addusr: {
    type: DataTypes.STRING(15),
    allowNull: true,
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
    this.hasMany(models.testSessionReportesCerebros, { as: 'reportesCerebro', foreignKey: 'idReporte' });
    this.hasMany(models.webSuscripcionesTestReportes, { as: 'suscripcionesTestReportes', foreignKey: 'idReporte' });
    this.belongsToMany(models.webSuscripcionesTest, {
      through: { model: models.webSuscripcionesTestReportes },
      as: 'suscripcionesTest',
      foreignKey: 'idReporte',
    });
    this.belongsToMany(models.webEmpresasRoles, {
      through: { model: models.webSuscripcionesTestReportes },
      as: 'roles',
      foreignKey: 'idReporte',
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
