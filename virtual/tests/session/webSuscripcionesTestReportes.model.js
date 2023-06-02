'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones_test_reportes';
const MODEL_NAME = 'webSuscripcionesTestReportes';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  idSuscripcionTest: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_suscripciones_test',
      key: 'id_suscripcion_test',
    },
    field: 'id_suscripcion_test',
  },
  idReporte: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'test_session_reportes',
      key: 'id',
    },
    field: 'id_reporte',
  },
  idRol: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_empresas_roles',
      key: 'id',
    },
    field: 'id_rol',
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
    this.belongsTo(models.testSessionReportes, { as: 'reporte', foreignKey: 'idReporte' });
    this.belongsTo(models.webEmpresasRoles, { as: 'rol', foreignKey: 'idRol' });
    this.belongsTo(models.webSuscripcionesTest, {
      as: 'suscripcionTest',
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
