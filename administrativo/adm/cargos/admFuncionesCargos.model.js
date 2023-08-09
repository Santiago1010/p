'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'adm_funciones_cargos';
const MODEL_NAME = 'admFuncionesCargos';

const Schema = {
  idCargo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'admCargos',
      key: 'codcrg',
    },
    field: 'idcargo',
  },
  idFuncion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'admFunciones',
      key: 'id',
    },
    field: 'idfuncion',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.admCargos, {
      foreignKey: 'idCargo',
      as: 'cargo',
    });
    this.belongsTo(models.admFunciones, {
      foreignKey: 'idFuncion',
      as: 'funcion',
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
