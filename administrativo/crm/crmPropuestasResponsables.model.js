'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'crm_propuestas_responsables';
const MODEL_NAME = 'crmPropuestasResponsables';

const Schema = {
  idPropuestaResponsable: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_propuesta_responsable',
  },
  idPropuesta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_suscripciones_propuestas',
      key: 'id_suscripcion_propuesta',
    },
    field: 'id_propuesta',
    unique: 'propuesta_responsable_UN',
  },
  idResponsable: {
    type: DataTypes.STRING(30),
    allowNull: false,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_responsable',
    unique: 'propuesta_responsable_UN',
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
    this.belongsTo(models.admEmpleados, { as: 'responsable', foreignKey: 'idResponsable' });
    this.belongsTo(models.webSuscripcionesPropuestas, {
      as: 'propuesta',
      foreignKey: 'idPropuesta',
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
