'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_actividades_ejercicios';
const MODEL_NAME = 'testActividadesEjercicios';

const Schema = {
  idEjercicio: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'cod_ejercicio',
  },
  idActividad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'test_actividades',
      key: 'id',
    },
    field: 'cod_actividad',
  },
  titulo: {
    type: DataTypes.STRING(400),
    allowNull: false,
  },
  objetivo: {
    type: DataTypes.STRING(400),
    allowNull: false,
  },
  tiempo: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  materiales: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  recurso: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  urlRecurso: {
    type: DataTypes.STRING(300),
    allowNull: false,
    field: 'url_recurso',
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
    this.belongsTo(models.testActividades, { as: 'actividad', foreignKey: 'idActividad' });
    this.belongsToMany(models.webEmpresas, {
      through: { model: models.webEmpresasTestActividades },
      as: 'empresas',
      foreignKey: 'idEjercicio',
    });
    this.hasMany(models.testActividadesEjerciciosUsuarios, { as: 'ejerciciosUsuario', foreignKey: 'idEjercicio' });
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
