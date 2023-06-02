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
  estado: {
    type: DataTypes.VIRTUAL,
    get() {
      let deletedAt = this.getDataValue('deletedAt');
      return deletedAt ? 0 : 1;
    },
    set(value) {
      throw new Error('Estado es un campo virtual no se puede guardar');
    },
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
    this.hasMany(models.webSuscripcionesEventos, {
      as: 'suscripcionesEventos',
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
    this.hasMany(models.webSuscripcionesCertificados, {
      as: 'suscripcionesCertificados',
      foreignKey: 'idSuscripcion',
    });
    this.belongsToMany(models.webCertificados, {
      through: { model: models.webSuscripcionesCertificados },
      as: 'certificados',
      foreignKey: 'idSuscripcion',
    });
    this.hasMany(models.webSuscripcionesProgramasFormacion, {
      as: 'suscripcionesProgramasFormacion',
      foreignKey: 'idSuscripcion',
    });
    this.belongsToMany(models.webProgramasFormacion, {
      through: { model: models.webSuscripcionesProgramasFormacion },
      as: 'programasFormacion',
      foreignKey: 'idSuscripcion',
    });
    this.hasMany(models.webSuscripcionesEventosCategorias, {
      as: 'suscripcionesEventosCategorias',
      foreignKey: 'idSuscripcion',
    });
    this.belongsToMany(models.webEventosCategorias, {
      through: { model: models.webSuscripcionesEventosCategorias },
      as: 'eventosCategorias',
      foreignKey: 'idSuscripcion',
    });
    this.hasOne(models.webSuscripcionesTest, { as: 'suscripcionTest', foreignKey: 'idSuscripcion' });
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
