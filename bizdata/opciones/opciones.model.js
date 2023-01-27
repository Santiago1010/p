'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'biz_opciones';
const MODEL_NAME = 'bizOpciones';

const Schema = {
  nombre: DataTypes.STRING,
  url: DataTypes.STRING,
  orden: DataTypes.INTEGER,
  activo: DataTypes.INTEGER,
  depende: DataTypes.INTEGER,
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
      timestamps: false,
    };
  }
}

module.exports = { Schema, ExtendedModel };
