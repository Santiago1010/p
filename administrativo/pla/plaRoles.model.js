'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'pla_roles';
const MODEL_NAME = 'plaRoles';

const Schema = {
  idRol: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_rol',
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  evalua: {
    type: DataTypes.TINYINT,
    allowNull: true,
    comment: 'Evalua es 1 si el rol evalua otros roles',
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
    this.hasMany(models.plaGruposUsuarios, { as: 'gruposUsuarios', foreignKey: 'idRol' });
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
