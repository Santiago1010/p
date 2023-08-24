'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_ubicaciones';
const MODEL_NAME = 'acfUbicaciones';

const Schema = {
  idUbicacion: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_ubicacion',
  },
  idSede: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'adm_sedes',
      key: 'codsed',
    },
    field: 'id_sede',
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  orden: {
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
    this.hasMany(models.acfEquipos, { as: 'equipos', foreignKey: 'idUbicacion' });
    this.belongsTo(models.admSedes, { as: 'sede', foreignKey: 'idSede' });
    this.hasMany(models.acfTraslados, { as: 'trasladosOrigen', foreignKey: 'idUbicacionOrigen' });
    this.hasMany(models.acfTraslados, { as: 'trasladosDestino', foreignKey: 'idUbicacionDestino' });
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
