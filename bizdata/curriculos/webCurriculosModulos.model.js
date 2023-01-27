'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_curriculos_modulos';
const MODEL_NAME = 'webCurriculosModulos';

const Schema = {
  idModuloCurriculo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_modulo_curriculo',
  },
  idCurriculo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    references: {
      model: 'web_curriculos',
      key: 'id_curriculo',
    },
    field: 'id_curriculo',
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  orden: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  estado: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: 1,
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webCurriculos, { as: 'curriculo', foreignKey: 'idCurriculo' });
    this.hasMany(models.webCurriculosModulosLecciones, {
      as: 'lecciones',
      foreignKey: 'idModulo',
    });
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
