'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'adm_insumos_lugares_responsable';
const MODEL_NAME = 'admInsumosLugaresResponsable';

const Schema = {
  idResponsable: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'id_lugar_resp',
  },
  idLugar: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'admInsumosLugares',
      key: 'idLugar',
    },
    field: 'id_lugar',
  },
  idEmpleado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'admEmpleados',
      key: 'codemp',
    },
    field: 'id_empleado',
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
    this.belongsTo(models.admInsumosLugares, { foreignKey: 'idLugar', as: 'lugar' });
    this.belongsTo(models.admEmpleados, { foreignKey: 'idEmpleado', as: 'encargado' });
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

module.exports = { ExtendedModel, Schema };
