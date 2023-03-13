'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_retos';
const MODEL_NAME = 'webRetos';

const config = require('../../../../config');

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
    get() {
      const imageLocation = this.getDataValue('logo');
      const hostImage = config.images.host;
      if (!imageLocation) {
        return null;
      }
      return `${hostImage}${imageLocation}`;
    },
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
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
  },
  deletedAt: {
    field: 'deleted_at',
    type: DataTypes.DATE,
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
      timestamps: true,
      paranoid: true,
    };
  }
}

module.exports = { Schema, ExtendedModel };
