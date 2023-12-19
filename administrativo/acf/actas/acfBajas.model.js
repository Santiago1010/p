'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_bajas';
const MODEL_NAME = 'acfBajas';

const Schema = {
  idBaja: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_baja',
  },
  tipo: {
    type: DataTypes.ENUM('traslado', 'donacion', 'subasta', 'definitiva', 'destruccion'),
    allowNull: false,
    defaultValue: 'traslado',
    comment: 'Motivo de la baja',
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  justificacion: {
    type: DataTypes.STRING(350),
    allowNull: false,
  },
  idEmpleadoGenera: {
    type: DataTypes.STRING(30),
    allowNull: false,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado_genera',
  },
  idEmpleadoAutoriza: {
    type: DataTypes.STRING(30),
    allowNull: true,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado_autoriza',
  },
  fechaAutoriza: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_autoriza',
  },
  firmaAutoriza: {
    type: DataTypes.STRING(200),
    allowNull: true,
    field: 'firma_autoriza',
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
    this.hasMany(models.acfBajasDetalle, { as: 'detalles', foreignKey: 'idBaja' });
    this.belongsToMany(models.acfEquipos, {
      through: { model: models.acfBajasDetalle },
      foreignKey: 'idBaja',
      otherKey: 'idEquipo',
      as: 'equipos',
    });
    this.belongsTo(models.admEmpleados, { as: 'empleadoGenera', foreignKey: 'idEmpleadoGenera' });
    this.belongsTo(models.admEmpleados, { as: 'empleadoAutoriza', foreignKey: 'idEmpleadoAutoriza' });
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
