'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'adm_funciones_cargos';
const MODEL_NAME = 'admFuncionesCargos';

const Schema = {
  idCargo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'adm_cargos',
      key: 'codcrg',
    },
  },
  idFuncion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'adm_funciones',
      key: 'id',
    },
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.admCargos, {
      foreignKey: 'idcargo',
      targetKey: 'codcrg',
      as: 'cargo',
    });
    this.belongsTo(models.admFunciones, {
      foreignKey: 'idfuncion',
      targetKey: 'id',
      as: 'funcion',
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
