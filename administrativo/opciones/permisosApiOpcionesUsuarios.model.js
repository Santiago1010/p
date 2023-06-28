'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'permisos_api_opciones_usuarios';
const MODEL_NAME = 'permisosApiOpcionesUsuarios';

const Schema = {
  idPermisoUsuario: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_permiso_usuario',
  },
  idPermiso: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'permisos_api_opciones',
      key: 'id_permiso',
    },
    field: 'id_permiso',
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id',
    },
    field: 'id_usuario',
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.permisosApiOpciones, { as: 'permiso', foreignKey: 'idPermiso' });
    this.belongsTo(models.Usuarios, { as: 'usuario', foreignKey: 'idUsuario' });
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
