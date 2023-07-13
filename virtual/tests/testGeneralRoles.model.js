'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_general_roles';
const MODEL_NAME = 'testGeneralRoles';

const Schema = {
  idTestRol: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_test_rol',
  },
  idTest: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'test_general',
      key: 'id',
    },
    field: 'id_test',
  },
  idRol: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
    this.belongsTo(models.testGeneral, { as: 'testGeneral', foreignKey: 'idTest' });
    this.belongsTo(models.webEmpresasRoles, { as: 'rol', foreignKey: 'idRol' });
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
