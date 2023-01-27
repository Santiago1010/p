'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_usuarios_empresas';
const MODEL_NAME = 'webUsuariosEmpresas';

const Schema = {
  id: {
    field: 'id_usuario_empresa',
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  idUsuario: {
    field: 'id_usuario',
    type: DataTypes.INTEGER,
  },
  idEmpresa: {
    field: 'id_empresa',
    type: DataTypes.INTEGER,
  },
  idEmpresaArea: {
    field: 'id_empresa_area',
    type: DataTypes.INTEGER,
  },
  cargoEmpresa: {
    field: 'cargo_empresa',
    type: DataTypes.STRING(100),
  },
  idNivelActual: {
    field: 'id_nivel_actual',
    type: DataTypes.INTEGER,
  },
  ultimoIngreso: {
    field: 'ultima_fecha_ingreso',
    type: DataTypes.DATEONLY,
  },
  fechaRacha: {
    field: 'fecha_racha',
    type: DataTypes.DATEONLY,
  },
  diasRacha: {
    field: 'dias_racha',
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  rolEmpresa: {
    field: 'rol_empresa',
    type: DataTypes.INTEGER,
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
    this.belongsTo(models.webEmpresasRoles, { as: 'rol', foreignKey: 'rolEmpresa' });
    this.belongsTo(models.webEmpresasAreas, { as: 'area', foreignKey: 'idEmpresaArea' });
    this.hasMany(models.viewUsuariosStats, { as: 'statsUsuario', foreignKey: 'idEmpresa', sourceKey: 'idEmpresa' });
    this.belongsTo(models.webUsuarios, { as: 'usuario', foreignKey: 'idUsuario' });
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
