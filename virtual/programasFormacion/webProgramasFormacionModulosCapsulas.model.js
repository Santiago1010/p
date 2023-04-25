'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_programas_formacion_modulos_capsulas';
const MODEL_NAME = 'webProgramasFormacionModulosCapsulas';

const Schema = {
  idCapsula: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_modulo_capsula',
  },
  idModulo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_programas_formacion_modulos',
      key: 'id_programa_modulo',
    },
    field: 'id_modulo',
  },
  tipo: {
    type: DataTypes.ENUM('Video', 'Audio', 'Texto', 'Imagen', 'Documento', 'Quiz'),
    allowNull: true,
    field: 'tipo_capsula',
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: true,
    field: 'nombre_capsula',
  },
  recurso: {
    type: DataTypes.STRING(150),
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
    this.belongsTo(models.webProgramasFormacionModulos, {
      as: 'modulo',
      foreignKey: 'idModulo',
    });
    this.hasMany(models.webSuscripcionesProgramasCalendarioDetalle, {
      as: 'cronogramas',
      foreignKey: 'idCapsula',
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
