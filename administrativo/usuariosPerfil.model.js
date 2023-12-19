'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'usuarios_perfil';
const MODEL_NAME = 'usuariosPerfil';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(80),
    allowNull: true,
  },
  activo: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.Usuarios, { as: 'usuario', foreignKey: 'id' });
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
