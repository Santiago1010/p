'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_actividades';
const MODEL_NAME = 'testActividades';

const Schema = {
  idActividad: {
    field: 'id',
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  idCerebro: {
    field: 'cerebro',
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    references: {
      model: 'test_cerebros',
      key: 'id',
    },
  },
  cantEjerc: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'cant_ejerc',
  },
  tipo: {
    type: DataTypes.ENUM('Recomendacion', 'Actividad'),
    allowNull: false,
  },
  addusr: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.testCerebros, { as: 'cerebro', foreignKey: 'idCerebro' });
    this.hasMany(models.testActividadesEjercicios, { as: 'ejercicios', foreignKey: 'idActividad' });
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
