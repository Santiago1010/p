'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_rutas_aprendizaje_categorias';
const MODEL_NAME = 'webRutasAprendizajeCategorias';

const Schema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    field: 'id_ruta_aprendizaje_categoria',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'nombre_ruta_aprendizaje_categoria',
  },
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'id_producto',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.webRutasAprendizaje, { as: 'rutasAprendizaje', foreignKey: 'idCategoria' });
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
