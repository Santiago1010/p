'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_actas';
const MODEL_NAME = 'acfActas';

const Schema = {
  idActa: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_acta',
  },
  tipo: {
    type: DataTypes.ENUM('entrega', 'devolucion'),
    allowNull: false,
    defaultValue: 'entrega',
    comment: 'Tipo de actas activos',
  },
  idEmpleadoActa: {
    type: DataTypes.STRING(30),
    allowNull: true,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado_acta',
  },
  idContratoRecibe: {
    type: DataTypes.STRING(80),
    allowNull: true,
    references: {
      model: 'adm_empleados_contrato',
      key: 'codcontrato',
    },
    field: 'id_contrato_recibe',
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  observacion: {
    type: DataTypes.STRING(350),
    allowNull: false,
  },
  estado: {
    type: DataTypes.VIRTUAL,
    get() {
      return this.getDataValue('firmaActa') ? 'Firmada' : 'Sin firmar';
    },
    set() {
      throw new Error('El campo `estado` es virtual y no puede ser "seteado"');
    },
  },
  firmaActa: {
    type: DataTypes.STRING(350),
    allowNull: true,
    field: 'firma_acta',
  },
  idEmpleadoRecibe: {
    type: DataTypes.STRING(30),
    allowNull: true,
    comment: 'No es nulo en tipo devolucion',
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado_recibe',
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
    this.hasMany(models.acfActasDetalle, { as: 'detalles', foreignKey: 'idActa' });
    this.belongsToMany(models.acfEquipos, {
      through: { model: models.acfActasDetalle },
      foreignKey: 'idActa',
      as: 'activos',
    });
    this.belongsTo(models.admEmpleados, { as: 'empleadoActa', foreignKey: 'idEmpleadoActa' });
    this.belongsTo(models.admEmpleados, { as: 'empleadoRecibe', foreignKey: 'idEmpleadoRecibe' });
    this.belongsTo(models.admEmpleadosContrato, {
      as: 'contratoEmpleadoRecibe',
      foreignKey: 'idContratoRecibe',
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
