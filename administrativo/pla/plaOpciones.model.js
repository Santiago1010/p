'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'pla_opciones';
const MODEL_NAME = 'plaOpciones';

const Schema = {
  idOpcion: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_opcion',
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  valor: {
    type: DataTypes.INTEGER,
    allowNull: true,
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
    this.hasMany(models.plaIndicadorOpciones, { as: 'indicadoresOpciones', foreignKey: 'idOpcion' });
    this.belongsToMany(models.plaIndicadores, {
      through: { model: models.plaIndicadorOpciones },
      as: 'indicadores',
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
