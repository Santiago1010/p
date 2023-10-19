'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_inventario';
const MODEL_NAME = 'acfInventario';

const Schema = {
  idInventario: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_inventario',
  },
  idAreaResp: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_areas_responsables',
      key: 'id_area_resp',
    },
    field: 'id_area_resp',
  },
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'fecha_fin',
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
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
    this.hasMany(models.acfInventarioDetalle, { as: 'detalles', foreignKey: 'idInventario' });
    this.belongsToMany(models.acfEquipos, {
      through: { model: models.acfInventarioDetalle },
      foreignKey: 'idInventario',
      otherKey: 'idEquipo',
      as: 'equipos',
    });
    this.belongsTo(models.acfAreasResponsables, { as: 'areasResponsables', foreignKey: 'idAreaResp' });
    this.belongsToMany(models.admEmpleados, {
      through: { model: models.acfAreasResponsables },
      foreignKey: 'idAreaResp',
      as: 'empleado',
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
