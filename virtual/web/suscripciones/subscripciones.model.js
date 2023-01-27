'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones';
const MODEL_NAME = 'webSuscripciones';

const Schema = {
  idSuscripcion: {
    field: 'id_suscripcion',
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idLinea: {
    field: 'id_suscripcion_linea',
    type: DataTypes.INTEGER,
  },
  idEmpresa: {
    field: 'id_empresa',
    type: DataTypes.INTEGER,
  },
  nombre: {
    field: 'nombre_suscripcion',
    type: DataTypes.STRING(100),
  },
  fecha: {
    type: DataTypes.DATE,
  },
  fechaInicio: {
    field: 'fecha_inicio',
    type: DataTypes.DATE,
    allowNull: false,
  },
  fechaFin: {
    field: 'fecha_fin',
    type: DataTypes.DATE,
    allowNull: false,
  },
  vigente: {
    type: DataTypes.VIRTUAL,
    get() {
      const today = new Date();
      return this.get('fechaFin') >= today;
    },
  },
  autoGestionable: {
    field: 'auto_gestionable',
    type: DataTypes.ENUM('virtual', 'interno', 'externo'),
    default: 'virtual',
  },
  limiteCursos: {
    field: 'limite_cursos',
    type: DataTypes.INTEGER,
  },
  tipo: {
    type: DataTypes.ENUM('escuela', 'programa'),
  },
  totalLicencias: {
    field: 'total_licencias',
    type: DataTypes.INTEGER,
  },
  incluirTodos: {
    field: 'incluir_todos',
    type: DataTypes.TINYINT.UNSIGNED,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webEmpresas, { as: 'empresa', foreignKey: 'idEmpresa' });
    this.belongsTo(models.webSuscripcionesLineas, { as: 'linea', foreignKey: 'idLinea' });
    this.belongsToMany(models.webRutasAprendizaje, {
      through: { model: models.webSuscripcionesRutasAprendizaje },
      as: 'rutasAprendizaje',
      foreignKey: 'idSuscripcion',
    });
    this.belongsToMany(models.webUsuarios, {
      through: { model: models.webUsuariosSuscripciones },
      as: 'usuarios',
      foreignKey: 'idSuscripcion',
    });
    this.belongsToMany(models.webEventos, {
      through: { model: models.webSuscripcionesEventos },
      as: 'eventos',
      foreignKey: 'idSuscripcion',
    });
    this.belongsToMany(models.webCurriculos, {
      through: { model: models.webSuscripcionesCurriculos },
      as: 'curriculos',
      foreignKey: 'idSuscripcion',
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
