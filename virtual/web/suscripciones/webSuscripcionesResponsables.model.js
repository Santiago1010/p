'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones_responsables';
const MODEL_NAME = 'webSuscripcionesResponsables';

const Schema = {
  idSuscripcionResponsable: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_suscripcion_responsable',
  },
  idSuscripcion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_suscripciones',
      key: 'id_suscripcion',
    },
    field: 'id_suscripcion',
  },
  idResponsable: {
    type: DataTypes.STRING(30),
    allowNull: false,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_responsable',
  },
  rol: {
    type: DataTypes.ENUM('manager', 'colaborador'),
    allowNull: false,
    defaultValue: 'colaborador',
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
    this.belongsTo(models.webSuscripciones, { as: 'suscripcion', foreignKey: 'idSuscripcion' });
    this.belongsTo(models.admEmpleados, { as: 'responsable', foreignKey: 'idResponsable' });
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
