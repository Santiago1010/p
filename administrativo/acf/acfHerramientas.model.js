'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_herramientas';
const MODEL_NAME = 'acfHerramientas';

const Schema = {
  idHerramienta: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_herramienta',
  },
  idCategoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_herramientas_categorias',
      key: 'id_categoria',
    },
    field: 'id_categoria',
  },
  idArea: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_areas',
      key: 'id_area',
    },
    field: 'id_area',
  },
  nombre: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  observacion: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  link: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  usuario: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  mfa: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  respMfa: {
    type: DataTypes.STRING(30),
    allowNull: true,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'resp_mfa',
  },
  fechaAdquisicion: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'fecha_adquisicion',
  },
  fechaRenovacion: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_renovacion',
  },
  tipoRenovacion: {
    type: DataTypes.ENUM('anual', 'mensual', 'periodico'),
    allowNull: false,
    defaultValue: 'anual',
    comment: 'Tipo de renovacion herramientas',
    field: 'tipo_renovacion',
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
  static associate(models) {}

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
