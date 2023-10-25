'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'pla_resdetalle';
const MODEL_NAME = 'plaResdetalle';

const Schema = {
  idResdetalle: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_resdetalle',
  },
  idResgeneral: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pla_resgeneral',
      key: 'id_resgeneral',
    },
    field: 'id_resgeneral',
  },
  idIndicadorOpcion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'pla_indicador_opciones',
      key: 'id_indicador_opcion',
    },
    field: 'id_indicador_opcion',
  },
  respuesta: {
    type: DataTypes.STRING(300),
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
    this.belongsTo(models.plaResgeneral, { as: 'resgeneral', foreignKey: 'idResgeneral' });
    this.belongsTo(models.plaIndicadorOpciones, {
      as: 'indicadorOpcion',
      foreignKey: 'idIndicadorOpcion',
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
