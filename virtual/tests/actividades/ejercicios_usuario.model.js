'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');

const TABLE_NAME = 'test_actividades_ejercicios_usuarios';
const MODEL_NAME = 'testActividadesEjerciciosUsuarios';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_test_actividade_ejercicio_usuario',
  },
  idEjercicio: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'test_actividades_ejercicios',
      key: 'cod_ejercicio',
    },
    field: 'cod_ejercicio',
    unique: 'cod_ejercicio_id_usuario',
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_usuarios',
      key: 'id_usuario',
    },
    field: 'id_usuario',
    unique: 'cod_ejercicio_id_usuario',
  },
  evaluacion: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fechaInicio: {
    field: 'fecha_inicio',
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  fechaFin: {
    field: 'fecha_fin',
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  estado: {
    type: DataTypes.ENUM('disponible', 'realizada', 'en proceso'),
    defaultValue: 'en proceso',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.testActividadesEjercicios, { as: 'ejercicio', foreignKey: 'idEjercicio' });
    this.belongsTo(models.webUsuarios, { as: 'usuario', foreignKey: 'idUsuario' });
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
