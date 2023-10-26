'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_novedad_user';
const MODEL_NAME = 'ctbNovedadUser';

const Schema = {
  codusr: {
    type: DataTypes.STRING(30),
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
  },
  codnov: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    primaryKey: true,
    references: {
      model: 'ctb_novedad_tipos',
      key: 'codigo',
    },
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
    this.belongsTo(models.ctbNovedadTipos, { as: 'novedadTipo', foreignKey: 'codnov' });
    this.belongsTo(models.admEmpleados, { as: 'empleado', foreignKey: 'codusr' });
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
