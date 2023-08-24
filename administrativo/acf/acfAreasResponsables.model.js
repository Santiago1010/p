'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_areas_responsables';
const MODEL_NAME = 'acfAreasResponsables';

const Schema = {
  idAreaResp: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_area_resp',
  },
  idArea: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_areas',
      key: 'id_area',
    },
    field: 'id_area',
    unique: 'acf_areas_responsable_UN',
  },
  idEmpleado: {
    type: DataTypes.STRING(30),
    allowNull: false,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado',
    unique: 'acf_areas_responsable_UN',
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
    this.belongsTo(models.acfAreas, { as: 'area', foreignKey: 'idArea' });
    this.belongsTo(models.admEmpleados, { as: 'empleado', foreignKey: 'idEmpleado' });
    this.hasMany(models.acfInventario, { as: 'inventarios', foreignKey: 'idAreaResp' });
    this.hasMany(models.acfSolicitudes, { as: 'solicitudes', foreignKey: 'idAreaResp' });
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
