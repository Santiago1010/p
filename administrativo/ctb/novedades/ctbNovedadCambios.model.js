'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_novedad_cambios';
const MODEL_NAME = 'ctbNovedadCambios';

const Schema = {
  ide: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  codnovd: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ctb_novedades_nom',
      key: 'codigo',
    },
  },
  observacion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  addusr: {
    type: DataTypes.STRING(30),
    allowNull: false,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
  },
  fecha: {
    type: DataTypes.DATE,
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
    this.belongsTo(models.ctbNovedadesNom, { as: 'novedadNomina', foreignKey: 'codnovd' });
    this.belongsTo(models.admEmpleados, { as: 'empleadoGenera', foreignKey: 'addusr' });
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
