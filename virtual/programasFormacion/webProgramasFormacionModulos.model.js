'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_programas_formacion_modulos';
const MODEL_NAME = 'webProgramasFormacionModulos';

const Schema = {
  idModulo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_programa_modulo',
  },
  idPrograma: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_programas_formacion',
      key: 'id_programa_formacion',
    },
    field: 'id_programa',
  },
  descripcion: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  orden: {
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
    this.belongsTo(models.webProgramasFormacion, { as: 'programaFormacion', foreignKey: 'idPrograma' });
    this.hasMany(models.webProgramasFormacionModulosCapsulas, {
      as: 'capsulas',
      foreignKey: 'idModulo',
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
