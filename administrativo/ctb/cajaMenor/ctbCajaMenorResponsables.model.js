'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_caja_menor_responsables';
const MODEL_NAME = 'ctbCajaMenorResponsables';

const Schema = {
  idCajaResponsable: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_caja_resp',
  },
  idEmpleado: {
    type: DataTypes.STRING(30),
    allowNull: false,
    field: 'id_empleado',
  },
  idCajaMenor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_caja_menor',
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
    field: 'updated_at',
  },
  deletedAt: {
    type: DataTypes.DATE,
    defaultValue: null,
    allowNull: true,
    field: 'deleted_at',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.admEmpleados, {
      foreignKey: 'idEmpleado',
      as: 'empleado',
    });
    this.belongsTo(models.ctbCajaMenor, {
      foreignKey: 'idCajaMenor',
      as: 'cajaMenor',
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
