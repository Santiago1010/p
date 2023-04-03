'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'crm_productos_responsables';
const MODEL_NAME = 'crmProductosResponsables';

const Schema = {
  idProductoResponsable: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_producto_responsable',
  },
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'crm_productos',
      key: 'id_producto',
    },
    field: 'id_producto',
    unique: 'producto_responsable_UN',
  },
  idResponsable: {
    type: DataTypes.STRING(30),
    allowNull: false,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_responsable',
    unique: 'producto_responsable_UN',
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
  deletedFor: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'deleted_for',
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.admEmpleados, { as: 'responsable', foreignKey: 'idResponsable' });
    this.belongsTo(models.crmProductos, { as: 'producto', foreignKey: 'idProducto' });
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
