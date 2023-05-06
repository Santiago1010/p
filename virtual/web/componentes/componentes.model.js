'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_componentes';
const MODEL_NAME = 'webComponentes';

const Schema = {
  idComponente: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_componente',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'nombre_componente',
  },
  idCategoria: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_componentes_categorias',
      key: 'id_componente_categoria',
    },
    field: 'id_componente_categoria',
  },
  correo: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'correo_componente',
  },
  apikey: {
    type: DataTypes.STRING(150),
    allowNull: true,
    field: 'apikey_componente',
  },
  apisecrect: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  token: {
    type: DataTypes.STRING(300),
    allowNull: true,
  },
  estado: {
    type: DataTypes.INTEGER,
    allowNull: true,
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
    this.belongsTo(models.webComponentesCategorias, { as: 'categoria', foreignKey: 'idCategoria' });
    this.hasMany(models.webEventos, { as: 'eventos', foreignKey: 'idComponente' });
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
