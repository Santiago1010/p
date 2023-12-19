'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'adm_cargos_plataformas';
const MODEL_NAME = 'admCargosPlataformas';

const Schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  idCargo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'admCargos',
      key: 'codcrg',
    },
    onUpdate: 'CASCADE',
  },
  idPlataforma: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'admPlataformas',
      key: 'id',
    },
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.admCargos, {
      foreignKey: 'idCargo',
      as: 'cargo',
    });
    this.belongsTo(models.admPlataformas, {
      foreignKey: 'idPlataforma',
      as: 'plataforma',
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
