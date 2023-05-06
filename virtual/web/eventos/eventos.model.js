'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_eventos';
const MODEL_NAME = 'webEventos';

const Schema = {
  idEvento: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_eventos',
  },
  idCategoria: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_eventos_categorias',
      key: 'id_evento_categoria',
    },
    field: 'id_evento_categoria',
  },
  idComponente: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_componentes',
      key: 'id_componente',
    },
    field: 'id_componente',
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: true,
    field: 'nombre_evento',
  },
  conferencista: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  fechaInicio: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'fecha_fin',
  },
  medio: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  imagen: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  link: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  fechaAsistencia: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_asistencia',
  },
  asistencia: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  estado: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
    allowNull: false,
  },
  deletedAt: {
    field: 'deleted_at',
    type: DataTypes.DATE,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webComponentes, { as: 'componente', foreignKey: 'idComponente' });
    this.belongsTo(models.webEventosCategorias, { as: 'categoria', foreignKey: 'idCategoria' });
    this.hasMany(models.webEventosAsistencias, { as: 'asistencias', foreignKey: 'idEvento' });
    this.belongsToMany(models.webSuscripciones, {
      through: { model: models.webSuscripcionesEventos },
      as: 'suscripciones',
      foreignKey: 'idEvento',
    });
    this.hasMany(models.webEventosRecursos, { as: 'recursos', foreignKey: 'idEvento' });
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
