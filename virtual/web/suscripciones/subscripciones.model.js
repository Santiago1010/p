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
  idPropuesta: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_suscripciones_propuestas',
      key: 'id_suscripcion_propuesta',
    },
    field: 'id_propuesta',
  },
  nombre: {
    field: 'nombre_suscripcion',
    type: DataTypes.STRING(100),
  },
  autoGestionable: {
    field: 'auto_gestionable',
    type: DataTypes.ENUM('virtual', 'interno', 'externo'),
    allowNull: true,
    default: null,
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
    allowNull: true,
    defaultValue: null,
  },
  fechaInicio: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'fecha_fin',
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
    this.belongsTo(models.webSuscripcionesPropuestas, {
      as: 'propuesta',
      foreignKey: 'idPropuesta',
    });
    this.hasMany(models.webCurriculosDocumentos, { as: 'documentos', foreignKey: 'idSuscripcion' });
    this.hasMany(models.webSuscripcionesCurriculos, { as: 'suscripcionesCurriculos', foreignKey: 'idSuscripcion' });
    this.hasMany(models.webRetosAsignacion, { as: 'retosAsignacion', foreignKey: 'idSuscripcion' });
    this.belongsToMany(models.webRetos, {
      through: { model: models.webRetosAsignacion },
      as: 'retos',
      foreignKey: 'idSuscripcion',
    });
    this.hasMany(models.crmSuscripcionesProductos, { as: 'suscripcionesProductos', foreignKey: 'idSuscripcion' });
    this.belongsToMany(models.crmProductos, {
      through: { model: models.crmSuscripcionesProductos },
      as: 'productos',
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
