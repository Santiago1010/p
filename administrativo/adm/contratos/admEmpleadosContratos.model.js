'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../../../../config');

const TABLE_NAME = 'adm_empleados_contrato';
const MODEL_NAME = 'admEmpleadosContrato';

const Schema = {
  codcontrato: {
    type: DataTypes.STRING(80),
    allowNull: false,
    primaryKey: true,
  },
  idTipo: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    defaultValue: 1,
    field: 'id_tipo',
  },
  codusr: {
    type: DataTypes.STRING(30),
    allowNull: false,
    primaryKey: true,
    defaultValue: '',
  },
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: null,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: null,
    field: 'fecha_fin',
  },
  periodoPrueba: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null,
    comment: 'Periodo de prueba del contrato',
    field: 'periodo_prueba',
  },
  addusr: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: null,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  valor: {
    type: DataTypes.DECIMAL(10, 0),
    allowNull: true,
    defaultValue: null,
  },
  valorTotal: {
    type: DataTypes.INTEGER(11),
    allowNull: true,
    defaultValue: null,
    field: 'valor_total',
  },
  fchliquidacion: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  usrliquidacion: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: null,
  },
  modContrato: {
    type: DataTypes.INTEGER(11),
    allowNull: true,
    defaultValue: null,
    field: 'mod_contrato',
  },
  auxilio: {
    type: DataTypes.DECIMAL(10, 0),
    allowNull: true,
    defaultValue: null,
  },
  horario: {
    type: DataTypes.STRING(250),
    allowNull: true,
    defaultValue: null,
  },
  lugarTrabajo: {
    type: DataTypes.STRING(250),
    allowNull: true,
    defaultValue: null,
    field: 'lugar_trabajo',
  },
  validadoEn: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
    comment: 'Fecha de validación del contrato',
    field: 'validado_en',
  },
  firma: {
    type: DataTypes.STRING(150),
    allowNull: true,
    defaultValue: null,
    comment: 'Link a la firma del empleado',
    get() {
      const firma = this.getDataValue('firma');
      const hostImage = config.images.host;
      if (!firma) {
        return null;
      }
      return `${hostImage}${firma}`;
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
    field: 'updated_at',
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
    field: 'deleted_at',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.admEmpleados, {
      foreignKey: 'codusr',
      as: 'empleado',
    });
    this.belongsTo(models.admContratosModelos, {
      foreignKey: 'modContrato',
      as: 'contratoModelo',
    });
    this.belongsTo(models.admContratosTipos, {
      foreignKey: 'idTipo',
      as: 'tipoContrato',
    });
    this.hasMany(models.admEmpleadosContratoAnexos, {
      foreignKey: 'idContrato',
      as: 'empleadosContratoAnexos',
    });
    this.belongsToMany(models.admContratosModelos, {
      through: { model: models.admEmpleadosContratoAnexos, unique: false },
      foreignKey: 'idContrato',
      otherKey: 'modAnexo',
      as: 'anexos',
    });
    this.hasMany(models.admContratosFunciones, {
      foreignKey: 'codContrato',
      as: 'funciones',
    });
    this.belongsToMany(models.admFunciones, {
      through: { model: models.admContratosFunciones },
      foreignKey: 'codContrato',
      otherKey: 'idFuncion',
      as: 'contratoFunciones',
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
