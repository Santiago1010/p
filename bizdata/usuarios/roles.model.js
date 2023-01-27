'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'biz_roles';
const MODEL_NAME = 'bizRoles';

const Schema = {
  nombre: DataTypes.STRING,
  descripcion: DataTypes.STRING,
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
      timestamps: false,
    };
  }
}

module.exports = { Schema, ExtendedModel };
