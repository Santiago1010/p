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
  estado: {
    type: DataTypes.VIRTUAL,
    get() {
      let deletedAt = this.getDataValue('deletedAt');
      return deletedAt ? 0 : 1;
    },
    set(value) {
      throw new Error('Estado es un campo virtual no se puede guardar');
    },
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
      timestamps: true,
      paranoid: true,
    };
  }
}

module.exports = { Schema, ExtendedModel };
