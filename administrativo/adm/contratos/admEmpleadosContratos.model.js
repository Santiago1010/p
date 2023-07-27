'use strict';
const { Model, DataTypes } = require('sequelize');
//const config = require('../../../config');

const TABLE_NAME = 'adm_empleados_contrato';
const MODEL_NAME = 'admEmpleadosContrato';

const Schema = {
  codcontrato: {
    type: DataTypes.STRING(80),
    allowNull: false,
    primaryKey: true,
  },
  codusr: {
    type: DataTypes.STRING(30),
    allowNull: false,
    primaryKey: true,
    defaultValue: '',
  },
  tipo: {
    type: DataTypes.ENUM('Término Fijo', 'Término indefinido', 'Civil por prestación de servicios', 'Aprendizaje'),
    defaultValue: 'Término Fijo',
  },
  fecha_inicio: {
    type: DataTypes.DATEONLY,
    defaultValue: null,
  },
  fecha_fin: {
    type: DataTypes.DATEONLY,
    defaultValue: null,
  },
  periodo_prueba: {
    type: DataTypes.STRING(100),
    defaultValue: null,
    comment: 'Periodo de prueba del contrato',
  },
  addusr: {
    type: DataTypes.STRING(20),
    defaultValue: null,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  valor: {
    type: DataTypes.DECIMAL(10, 0),
    defaultValue: null,
  },
  valor_total: {
    type: DataTypes.INTEGER(11),
    defaultValue: null,
  },
  fchliquidacion: {
    type: DataTypes.DATE,
    defaultValue: null,
  },
  usrliquidacion: {
    type: DataTypes.STRING(50),
    defaultValue: null,
  },
  mod_contrato: {
    type: DataTypes.INTEGER(11),
    defaultValue: null,
  },
  auxilio: {
    type: DataTypes.DECIMAL(10, 0),
    defaultValue: null,
  },
  horario: {
    type: DataTypes.STRING(250),
    defaultValue: null,
  },
  lugar_trabajo: {
    type: DataTypes.STRING(250),
    defaultValue: null,
  },
  validado_en: {
    type: DataTypes.DATE,
    defaultValue: null,
    comment: 'Fecha de validación del contrato',
  },
  firma: {
    type: DataTypes.STRING(150),
    defaultValue: null,
    comment: 'Link a la firma del empleado',
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
    this.belongsTo(models.admContratosFunciones, {
      foreignKey: 'adm_contratos_funciones_id',
      as: 'contratosFunciones',
    });
    this.hasMany(models.admEmpleadosContratoAnexos, {
      foreignKey: 'codcontrato',
      as: 'empleadosContratoAnexos',
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
