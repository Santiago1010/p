'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_retos';
const MODEL_NAME = 'webRetos';

const Schema = {
  idReto: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_reto',
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  resumen: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  tipo: {
    type: DataTypes.ENUM('cursos', 'iteracion'),
    allowNull: false,
    defaultValue: 'cursos',
  },
  logo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  beneficios: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  fechaInicio: {
    type: DataTypes.DATE,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATE,
    field: 'fecha_fin',
  },
  puntos: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.webRetosActividades, { as: 'actividades', foreignKey: 'idReto' });
    this.hasMany(models.webRetosAsignacion, { as: 'asignaciones', foreignKey: 'idReto' });
    this.hasMany(models.webRetosIteracion, { as: 'iteracion', foreignKey: 'idReto' });
    this.hasMany(models.webRetosProgresoUsuarios, { as: 'progresoUsuarios', foreignKey: 'idReto' });
    this.belongsToMany(models.webCursos, {
      through: { model: models.webRetosCursos },
      as: 'cursos',
      foreignKey: 'idReto',
    });
    this.belongsToMany(models.webSuscripciones, {
      through: { model: models.webRetosAsignacion },
      as: 'suscripciones',
      foreignKey: 'idReto',
    });
    this.hasMany(models.webRetosCursos, { as: 'retosCursos', foreignKey: 'idReto' });
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
