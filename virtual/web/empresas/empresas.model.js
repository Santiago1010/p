'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../../../../config');

const TABLE_NAME = 'web_empresas';
const MODEL_NAME = 'webEmpresas';

const Schema = {
  id: {
    field: 'id_empresa',
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    field: 'nombre_empresa',
    type: DataTypes.STRING(100),
  },
  nit: {
    field: 'nit_empresa',
    type: DataTypes.STRING(100),
  },
  direccion: {
    field: 'direccion_empresa',
    type: DataTypes.STRING(100),
  },
  correo: {
    field: 'correo_empresa',
    type: DataTypes.STRING(100),
  },
  idWebEmpresaAsesor: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_empresas_asesores',
      key: 'id_web_empresa_asesor',
    },
    field: 'id_web_empresa_asesor',
  },
  logo: {
    type: DataTypes.STRING(100),
    allowNull: true,
    get() {
      const imageLocation = this.getDataValue('logo');
      const hostImage = config.images.host;
      if (!imageLocation) {
        return null;
      }
      return `${hostImage}${imageLocation}`;
    },
  },
  digitoEmpresa: {
    type: DataTypes.STRING(10),
    allowNull: true,
    field: 'digito_empresa',
  },
  razonSocial: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'razon_social',
  },
  telefono: {
    type: DataTypes.STRING(40),
    allowNull: true,
  },
  celular: {
    type: DataTypes.STRING(40),
    allowNull: true,
  },
  fechaConstitucion: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_constitucion',
  },
  responsableIva: {
    type: DataTypes.ENUM('n', 's'),
    allowNull: true,
    field: 'responsable_iva',
  },
  rutUrl: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'rut_url',
  },
  ccUrl: {
    type: DataTypes.STRING(100),
    allowNull: true,
    comment: 'camara comercio fiole',
    field: 'cc_url',
  },
  idPais: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'adm_paises',
      key: 'id',
    },
    field: 'id_pais',
  },
  idCiudad: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'adm_ciudades',
      key: 'idCiudades',
    },
    field: 'id_ciudad',
  },
  certificados: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    defaultValue: 1,
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
    this.hasMany(models.webEmpresasRoles, { as: 'roles', foreignKey: 'idEmpresa' });
    this.hasMany(models.webSuscripciones, { as: 'suscripciones', foreignKey: 'idEmpresa' });
    this.hasMany(models.webEmpresasAreas, { as: 'areas', foreignKey: 'idEmpresa' });
    this.hasMany(models.webUsuariosEmpresas, { as: 'usuarioEmpresas', foreignKey: 'idEmpresa' });
    this.belongsToMany(models.webUsuarios, {
      through: { model: models.webUsuariosEmpresas },
      as: 'usuarios',
      foreignKey: 'idEmpresa',
    });
    this.belongsToMany(models.testRecomendaciones, {
      through: { model: models.webEmpresasTestRecomendaciones },
      as: 'recomendaciones',
      foreignKey: 'idEmpresa',
    });
    this.belongsToMany(models.webRutasAprendizajeCursosUsuarios, {
      through: { model: models.webRutasAprendizajeCursosEmpresaUsuarios },
      as: 'progresoCursosUsuarios',
      foreignKey: 'idEmpresa',
    });
    this.belongsToMany(models.webCursosProgresoUsuarios, {
      through: { model: models.webCursosProgresoEmpresaUsuarios },
      as: 'progresoUsuario',
      foreignKey: 'idEmpresa',
    });
    this.hasMany(models.webCurriculosSedes, { as: 'sedesCurriculos', foreignKey: 'idEmpresa' });
    this.hasMany(models.webSuscripcionesPropuestas, { as: 'propuestas', foreignKey: 'idEmpresa' });
    this.hasMany(models.webRetosProgresoUsuarios, { as: 'progresoRetos', foreignKey: 'idEmpresa' });
    this.hasMany(models.planNegocioArchivos, { as: 'planNegocioArchivos', foreignKey: 'idEmpresa' });
    this.hasMany(models.bizUsuarios, { as: 'bizUsuarios', foreignKey: 'empresaId' });
    this.hasMany(models.webEmpresasTestPruebas, { as: 'pruebas', foreignKey: 'idEmpresa' });
    this.hasMany(models.webFormularios, { as: 'formularios', foreignKey: 'idEmpresa' });
    this.hasMany(models.webEmpresasPublicidad, { as: 'publicidad', foreignKey: 'idEmpresa' });
    this.belongsTo(models.admCiudades, { as: 'ciudad', foreignKey: 'idCiudad' });
    this.belongsTo(models.admPaises, { as: 'pais', foreignKey: 'idPais' });
    this.belongsTo(models.webEmpresasAsesores, { as: 'asesor', foreignKey: 'idWebEmpresaAsesor' });
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
