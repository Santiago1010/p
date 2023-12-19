'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'biz_roles';
const MODEL_NAME = 'bizRoles';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: DataTypes.STRING,
  descripcion: DataTypes.STRING,
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
    this.hasMany(models.bizUsuarios, { as: 'usuarios', foreignKey: 'rol' });
    this.belongsToMany(models.bizOpciones, {
      through: { model: models.bizRolesOpciones },
      as: 'opciones',
      foreignKey: 'idRol',
    });
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
