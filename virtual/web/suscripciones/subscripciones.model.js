'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones';
const MODEL_NAME = 'webSuscripciones';

const Schema = {
  idSuscripcion: {
    autoIncrement: true,
    field: 'id_suscripcion',
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  idEmpresa: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_empresas',
      key: 'id_empresa',
    },
    field: 'id_empresa',
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
  idCategoria: {
    field: 'id_categoria',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'crm_categorias',
      key: 'id_categoria',
    },
  },
  nombre: {
    type: DataTypes.STRING(250),
    allowNull: false,
    defaultValue: 'Proyecto',
  },
  descripcion: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  formato: {
    type: DataTypes.ENUM('virtual', 'presencial', 'hibrido'),
    allowNull: false,
    defaultValue: 'virtual',
  },
  impacto: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  idPais: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 48,
    references: {
      model: 'adm_paises',
      key: 'id',
    },
    field: 'id_pais',
  },
  idCiudad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 6881,
    references: {
      model: 'adm_ciudades',
      key: 'idCiudades',
    },
    field: 'id_ciudad',
  },
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'fecha_fin',
  },
  fechaTest: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_test',
  },
  fechaEntrega: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_entrega',
  },
  fechaCierre: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_cierre',
  },
  estado: {
    type: DataTypes.ENUM('pendiente', 'parametrizacion', 'testing', 'produccion'),
    allowNull: false,
    defaultValue: 'pendiente',
    get() {
      const deletedAt = this.getDataValue('deletedAt');

      if (deletedAt !== null) {
        return 'desistido';
      }

      const estado = this.getDataValue('estado');

      if (estado === 'produccion') {
        const today = new Date();
        today.setUTCHours(5, 0, 0, 0);

        const fechaFin = new Date(this.getDataValue('fechaFin'));

        if (fechaFin.getTime() < today.getTime()) {
          return 'finalizado';
        }
      }

      return estado;
    },
  },
  valor: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
    defaultValue: 0.0,
    comment: 'Valor del proyecto basado en el total del contrato para validaciones',
  },
  rolDinamico: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    field: 'rol_dinamico',
  },
  totalLicencias: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
    field: 'total_licencias',
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
  deletedFor: {
    type: DataTypes.STRING(100),
    allowNull: true,
    comment: 'Motivo de eliminación',
    field: 'deleted_for',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webEmpresas, { as: 'empresa', foreignKey: 'idEmpresa' });
    this.belongsTo(models.webSuscripcionesPropuestas, {
      as: 'propuesta',
      foreignKey: 'idPropuesta',
    });
    this.belongsTo(models.admPaises, { as: 'pais', foreignKey: 'idPais' });
    this.belongsTo(models.admCiudades, { as: 'ciudad', foreignKey: 'idCiudad' });
    this.belongsTo(models.crmCategorias, { as: 'categoria', foreignKey: 'idCategoria' });
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
    this.hasMany(models.webSuscripcionesTestHabilidades, {
      as: 'suscripcionesTestHabilidades',
      foreignKey: 'idSuscripcion',
    });
    this.belongsToMany(models.testHabilidades, {
      through: { model: models.webSuscripcionesTestHabilidades },
      as: 'habilidades',
      foreignKey: 'idSuscripcion',
    });
    this.hasMany(models.webFormulariosSuscripciones, { as: 'formulariosSuscripciones', foreignKey: 'idSuscripcion' });
    this.belongsToMany(models.webFormularios, {
      through: { model: models.webFormulariosSuscripciones },
      as: 'formularios',
      foreignKey: 'idSuscripcion',
    });
    this.hasMany(models.webSuscripcionesResponsables, {
      as: 'suscripcionesResponsables',
      foreignKey: 'idSuscripcion',
    });
    this.hasMany(models.webSuscripcionesPropuestasHistorial, {
      as: 'suscripcionesHistorial',
      foreignKey: 'idSuscripcion',
    });
    this.hasMany(models.webSuscripcionesGruposDemograficos, {
      as: 'suscripcionesGruposDemograficos',
      foreignKey: 'idSuscripcion',
    });
    this.hasMany(models.ctbEgresos, { as: 'egresos', foreignKey: 'idSuscripcion' });
    this.hasMany(models.webSuscripcionesTematicas, { as: 'suscripcionesTematicas', foreignKey: 'idSuscripcion' });
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
