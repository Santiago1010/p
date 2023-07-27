'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'adm_funciones';
const MODEL_NAME = 'admFunciones';

const Schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  estado: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    comment: '1 = activo, 0 = inactivo',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsToMany(models.admCargos, {
      through: { model: models.admFuncionesCargos },
      foreignKey: 'codcrg',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: MODEL_NAME,
    };
  }
}

module.exports = { Schema, ExtendedModel };
