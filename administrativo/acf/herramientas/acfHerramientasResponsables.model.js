'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_herramientas_responsables';
const MODEL_NAME = 'acfHerramientasResponsables';

const Schema = {
  idAreaResponsable: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_area_resp',
  },
  idHerramienta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acfHerramientas',
      key: 'idHerramienta',
    },
    field: 'id_herramienta',
  },
  idEmpleado: {
    type: DataTypes.STRING(30),
    allowNull: false,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado',
  },
  principal: {
    type: DataTypes.TINYINT,
    field: 'principal',
    defaultValue: null,
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
    this.belongsTo(models.acfHerramientas, { as: 'herramienta', foreignKey: 'idHerramienta' });
    this.belongsTo(models.admEmpleados, { as: 'empleado', foreignKey: 'idEmpleado' });
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
