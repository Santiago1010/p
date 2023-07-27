'use strict';
const { Model, DataTypes } = require('sequelize');
//const config = require('../../../../config');

const TABLE_NAME = 'adm_contratos_modelos';
const MODEL_NAME = 'admContratosModelos';

const Schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
  anio: {
    type: DataTypes.INTEGER(4).UNSIGNED,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.ENUM('empleado', 'instructor'),
    allowNull: false,
    defaultValue: 'empleado',
  },
  tipo: {
    type: DataTypes.ENUM('contrato', 'documento'),
    allowNull: false,
    defaultValue: 'contrato',
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
  },
  deletedAt: {
    type: DataTypes.DATE,
    defaultValue: null,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.admContratosModelos, {
      foreignKey: 'mod_contrato',
      as: 'contratoModelo',
    });
    this.belongsTo(models.admContratosModelos, {
      foreignKey: 'mod_anexo',
      as: 'anexoModelo',
    });
    this.belongsTo(models.admContratosModelos, {
      foreignKey: 'mod_contrato',
      as: 'contratoEmpleadoModelo',
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
