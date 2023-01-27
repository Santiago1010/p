'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_curriculos';
const MODEL_NAME = 'webCurriculos';

const Schema = {
  idCurriculo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_curriculo',
  },
  idCurriculoCategoria: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_curriculos_categorias',
      key: 'id_curriculo_categoria',
    },
    field: 'id_curriculo_categoria',
  },
  logo: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  estado: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: 1,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.webCurriculosModulos, { as: 'modulos', foreignKey: 'idCurriculo' });
    this.belongsToMany(models.webSuscripciones, {
      through: { model: models.webSuscripcionesCurriculos },
      as: 'suscripciones',
      foreignKey: 'idCurriculo',
    });
    this.belongsTo(models.webCurriculosCategorias, {
      as: 'categoria',
      foreignKey: 'idCurriculoCategoria',
    });
    this.hasMany(models.webSuscripcionesCurriculos, {
      as: 'suscripcionesCurriculos',
      foreignKey: 'idCurriculo',
    });
    this.hasMany(models.webCurriculosProgresoGrupo, { as: 'webCurriculosProgresoGrupos', foreignKey: 'idCurriculo' });
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
