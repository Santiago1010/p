'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_empresas_areas';
const MODEL_NAME = 'webEmpresasAreas';

const Schema = {
  idEmpresaArea: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_empresa_area',
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
  nombreArea: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'nombre_area',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webEmpresas, { as: 'empresa', foreignKey: 'idEmpresa' });
    this.hasMany(models.webUsuariosEmpresas, { as: 'usuariosEmpresas', foreignKey: 'idEmpresaArea' });
    this.hasMany(models.bizUsuariosAreas, { as: 'usuariosAreas', foreignKey: 'idEmpresaArea' });
    this.belongsToMany(models.bizUsuarios, {
      through: { model: models.bizUsuariosAreas },
      as: 'bizUsuarios',
      foreignKey: 'idEmpresaArea',
    });
    this.hasMany(models.webRetosAsignacion, { as: 'retosAsignacion', foreignKey: 'idArea' });
    this.belongsToMany(models.webRetos, {
      through: { model: models.webRetosAsignacion },
      as: 'retos',
      foreignKey: 'idArea',
    });
    this.hasMany(models.webFormulariosAreas, { as: 'formulariosAreas', foreignKey: 'idArea' });
    this.belongsToMany(models.webFormularios, {
      through: { model: models.webFormulariosAreas },
      as: 'formularios',
      foreignKey: 'idArea',
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
