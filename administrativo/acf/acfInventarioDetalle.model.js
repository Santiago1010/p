'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_inventario_detalle';
const MODEL_NAME = 'acfInventarioDetalle';

const Schema = {
  idInventarioDetalle: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_inventario_detalle',
  },
  idInventario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_inventario',
      key: 'id_inventario',
    },
    field: 'id_inventario',
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
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
    this.belongsTo(models.acfInventario, { as: 'inventario', foreignKey: 'idInventario' });
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
