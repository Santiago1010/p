'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_curriculos_grupos_ventas';
const MODEL_NAME = 'webCurriculosGruposVentas';

const Schema = {
  idCurriculoGrupoVenta: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_curriculo_grupo_venta',
  },
  idGrupoCurriculo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    references: {
      model: 'web_curriculos_grupos',
      key: 'id_grupo_curriculo',
    },
    field: 'id_grupo_curriculo',
  },
  fechaInicio: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'fecha_fin',
  },
  unidades: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor: {
    type: DataTypes.DECIMAL(20, 6),
    allowNull: false,
    defaultValue: 0.0,
  },
  moneda: {
    type: DataTypes.STRING(10),
    allowNull: false,
    defaultValue: 'COP',
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
    this.belongsTo(models.webCurriculosGrupos, { as: 'grupo', foreignKey: 'idGrupoCurriculo' });
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
