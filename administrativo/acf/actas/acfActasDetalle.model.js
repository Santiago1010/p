'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_actas_detalle';
const MODEL_NAME = 'acfActasDetalle';

const Schema = {
  idActaDetalle: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_acta_detalle',
  },
  idActa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_actas',
      key: 'id_acta',
    },
    field: 'id_acta',
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
    this.belongsTo(models.acfActas, { as: 'acta', foreignKey: 'idActa' });
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
