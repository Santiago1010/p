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
  activo: DataTypes.INTEGER,
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
  certificados: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    defaultValue: 1,
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
    this.belongsToMany(models.testSessionReportes, {
      through: { model: models.webEmpresasTestReportes },
      as: 'reportes',
      foreignKey: 'idEmpresa',
    });
    this.belongsToMany(models.testRecomendaciones, {
      through: { model: models.webEmpresasTestRecomendaciones },
      as: 'recomendaciones',
      foreignKey: 'idEmpresa',
    });
    this.belongsToMany(models.testActividadesEjercicios, {
      through: { model: models.webEmpresasTestActividades },
      as: 'ejercicios',
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
