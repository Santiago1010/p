'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_session_reportes';
const MODEL_NAME = 'testSessionReportes';

const Schema = {
  titulo: DataTypes.STRING(100),
  descripcion: DataTypes.STRING(200),
  categoria: DataTypes.ENUM('estandar', 'especial'),
  estado: DataTypes.INTEGER,
  addusr: DataTypes.STRING,
  fchadd: DataTypes.DATE,
};

class ExtendedModel extends Model {
  static associate(models) {
    this.hasOne(models.testSessionReporteCerebro, { as: 'reportesCerebro', foreignKey: 'idReporte' });
    this.belongsToMany(models.webEmpresas, {
      through: { model: models.webEmpresasTestReportes },
      as: 'empresas',
      foreignKey: 'idReporte',
    });
    this.belongsToMany(models.webEmpresasRoles, {
      through: { model: models.webEmpresasTestReportes },
      as: 'roles',
      foreignKey: 'idReporte',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: MODEL_NAME,
      timestamps: false,
    };
  }
}

module.exports = { Schema, ExtendedModel };
