'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_curriculos_categorias';
const MODEL_NAME = 'webCurriculosCategorias';

const Schema = {
  idCurriculoCategoria: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_curriculo_categoria',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ctb_productos',
      key: 'id_producto',
    },
    field: 'id_producto',
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.webCurriculos, { as: 'curriculos', foreignKey: 'idCurriculoCategoria' });
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
