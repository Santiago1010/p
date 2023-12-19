'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_componentes';
const MODEL_NAME = 'acfComponentes';

const Schema = {
  idComponente: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_componente',
  },
  idEquipo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_equipos',
      key: 'id_equipo',
    },
    field: 'id_equipo',
  },
  nombre: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  serial: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  justificacionBaja: {
    type: DataTypes.STRING(250),
    allowNull: true,
    field: 'justificacion_baja',
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
    this.belongsTo(models.acfEquipos, { as: 'equipo', foreignKey: 'idEquipo' });
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
