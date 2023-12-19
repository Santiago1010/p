'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'adm_empleados_estudios';
const MODEL_NAME = 'admEmpleadosEstudios';

const Schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nivelEstudio: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'niv_escolar',
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaObtencion: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'fecha',
  },
  perfil: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codemp: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'admEmpleados',
      key: 'codemp',
    },
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.admEmpleados, {
      foreignKey: 'codemp',
      as: 'empleado',
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
