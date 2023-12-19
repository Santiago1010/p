'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_empresas_roles';
const MODEL_NAME = 'webEmpresasRoles';

const Schema = {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  descripcion: DataTypes.STRING(100),
  idEmpresa: {
    field: 'id_empresa',
    type: DataTypes.INTEGER,
  },
  estado: DataTypes.INTEGER,
  estadoString: {
    type: DataTypes.VIRTUAL,
    get() {
      const dicEstado = {
        0: 'Inactivo',
        1: 'Activo',
      };
      const estado = this.getDataValue('estado');
      return dicEstado[estado] || null;
    },
  },
  addusr: DataTypes.STRING(50),
  fchadd: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webEmpresas, { as: 'empresa', foreignKey: 'idEmpresa' });
    this.hasMany(models.webUsuariosEmpresas, { as: 'usuarios', foreignKey: 'rolEmpresa' });
    this.hasMany(models.webSuscripcionesTestReportes, { as: 'suscripcionesTestReportes', foreignKey: 'idRol' });
    this.belongsToMany(models.testSessionReportes, {
      through: { model: models.webSuscripcionesTestReportes },
      as: 'reportes',
      foreignKey: 'idRol',
    });
    this.belongsToMany(models.webSuscripcionesTest, {
      through: { model: models.webSuscripcionesTestReportes },
      as: 'suscripcionesTest',
      foreignKey: 'idRol',
    });
    this.hasMany(models.webFormulariosRoles, { as: 'formulariosRoles', foreignKey: 'idRol' });
    this.belongsToMany(models.webFormularios, {
      through: { model: models.webFormulariosRoles },
      as: 'formularios',
      foreignKey: 'idRol',
    });
    this.hasMany(models.testGeneralRoles, { as: 'testGeneralesRoles', foreignKey: 'idRol' });
    this.belongsToMany(models.testGeneral, {
      through: { model: models.testGeneralRoles },
      as: 'testGenerales',
      foreignKey: 'idRol',
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
