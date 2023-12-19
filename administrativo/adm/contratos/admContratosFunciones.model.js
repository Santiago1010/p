'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'adm_contratos_funciones';
const MODEL_NAME = 'admContratosFunciones';

const Schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  idFuncion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idfuncion',
  },
  codCrg: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'codcrg',
  },
  codContrato: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'codcontrato',
    charset: 'utf8',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.admCargos, {
      foreignKey: 'codCrg',
      as: 'cargo',
    });
    this.belongsTo(models.admFunciones, {
      foreignKey: 'idFuncion',
      as: 'funcion',
    });
    this.belongsTo(models.admEmpleadosContrato, {
      foreignKey: 'codContrato',
      as: 'empleadoContrato',
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
