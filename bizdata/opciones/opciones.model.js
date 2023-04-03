'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'biz_opciones';
const MODEL_NAME = 'bizOpciones';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: DataTypes.STRING,
  url: DataTypes.STRING,
  orden: DataTypes.INTEGER,
  activo: DataTypes.INTEGER,
  depende: DataTypes.INTEGER,
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
    this.belongsToMany(models.bizUsuarios, {
      through: { model: models.bizUsuariosOpciones },
      as: 'usuarios',
      foreignKey: 'idOpcion',
    });
    this.belongsToMany(models.bizRoles, {
      through: { model: models.bizRolesOpciones },
      as: 'roles',
      foreignKey: 'idOpcion',
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
