'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'adm_plataformas';
const MODEL_NAME = 'admPlataformas';

const Schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  icono: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsToMany(models.admCargos, {
      through: 'admCargosPlataformas',
      foreignKey: 'idPlataforma',
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
