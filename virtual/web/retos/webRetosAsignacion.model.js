'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_retos_asignacion';
const MODEL_NAME = 'webRetosAsignacion';

const Schema = {
  idRetoAsignacion: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_reto_asignacion',
  },
  idReto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_retos',
      key: 'id_reto',
    },
    field: 'id_reto',
  },
  idSuscripcion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_suscripciones',
      key: 'id_suscripcion',
    },
    field: 'id_suscripcion',
  },
  idArea: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_empresas_areas',
      key: 'id_empresa_area',
    },
    field: 'id_area',
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webEmpresasAreas, { as: 'area', foreignKey: 'idArea' });
    this.belongsTo(models.webSuscripciones, { as: 'suscripcion', foreignKey: 'idSuscripcion' });
    this.belongsTo(models.webRetos, { as: 'reto', foreignKey: 'idReto' });
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
