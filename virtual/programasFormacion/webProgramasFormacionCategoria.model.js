'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_programas_formacion_categoria';
const MODEL_NAME = 'webProgramasFormacionCategoria';

const Schema = {
  idCategoria: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_programa_formacion_categoria',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'nombre_formacion_categoria',
  },
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: true,
    // references: {
    //   model: 'ctb_productos',
    //   key: 'id_producto',
    // },
    field: 'id_porducto',
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
    this.hasMany(models.webProgramasFormacion, {
      as: 'programasFormacion',
      foreignKey: 'idCategoria',
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
