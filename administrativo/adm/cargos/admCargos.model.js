'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'adm_cargos';
const MODEL_NAME = 'admCargos';

const Schema = {
  codcrg: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nomcarg: {
    type: DataTypes.STRING(250),
    allowNull: true,
  },
  activo: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.admCargosPlataformas, {
      foreignKey: 'idCargo',
      as: 'cargosPlataforma',
    });
    this.hasMany(models.admContratosFunciones, {
      foreignKey: 'codCrg',
      as: 'contratosFunciones',
    });
    this.hasMany(models.admEmpleados, {
      foreignKey: 'cargo',
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
      timestamps: false,
    };
  }
}

module.exports = { Schema, ExtendedModel };
