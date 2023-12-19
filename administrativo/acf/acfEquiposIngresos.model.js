'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_equipos_ingresos';
const MODEL_NAME = 'acfEquiposIngresos';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id',
  },
  idEquipo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acfEquipos',
      key: 'idEquipo',
    },
    field: 'id_equipo',
  },
  cantidad: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  idEmpleado: {
    type: DataTypes.STRING(30),
    references: {
      model: 'admEmpleados',
      key: 'codemp',
    },
    field: 'id_empleado',
  },
  fechaIngreso: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'fecha_ingreso',
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
    this.belongsTo(models.acfEquipos, { foreignKey: 'idEquipo' });
    this.belongsTo(models.admEmpleados, { foreignKey: 'idEmpleado' });
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
