'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'adm_cargos';
const MODEL_NAME = 'admCargos';

const Schema = {
  codcrg: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'codcrg',
  },
  nomcarg: {
    type: DataTypes.STRING(250),
    allowNull: true,
    field: 'nomcarg',
  },
  activo: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    field: 'activo',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.admCargosPlataformas, {
      foreignKey: 'codcrg',
      as: 'cargosPlataforma',
    });
    this.hasMany(models.admContratosFunciones, {
      foreignKey: 'codcrg',
      as: 'contratosFunciones',
    });
    this.hasMany(models.admEmpleados, {
      foreignKey: 'codcrg',
      as: 'empleados',
    });
    this.belongsToMany(models.admFunciones, {
      through: { model: models.admFuncionesCargos },
      foreignKey: 'idCargo',
      as: 'funciones',
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
