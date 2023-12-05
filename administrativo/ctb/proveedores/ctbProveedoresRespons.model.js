'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_proveedores_respons';
const MODEL_NAME = 'ctbProveedoresRespons';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  idEmpleado: {
    type: DataTypes.STRING(30),
    allowNull: false,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    unique: 'FK_ctb_proveedor_respons_adm_empleados',
    field: 'id_empleado',
  },
  recurrente: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
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
    this.hasMany(models.ctbProveedoresSolicitudes, {
      as: 'solicitudes',
      foreignKey: 'idResponsable',
    });
    this.belongsTo(models.admEmpleados, { as: 'empleado', foreignKey: 'idEmpleado' });
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
