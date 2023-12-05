'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_proveedores_solicitudes_recurrentes';
const MODEL_NAME = 'ctbProveedoresSolicitudesRecurrentes';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  idSolicitud: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'ctb_proveedores_solicitudes',
      key: 'id',
    },
    field: 'id_solicitud',
  },
  idProveedor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'ctb_proveedores',
      key: 'id',
    },
    field: 'id_proveedor',
  },
  idAnio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'config_anios',
      key: 'id',
    },
    field: 'id_anio',
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
    this.belongsTo(models.configAnios, { as: 'anio', foreignKey: 'idAnio' });
    this.belongsTo(models.ctbProveedores, {
      as: 'proveedor',
      foreignKey: 'idProveedor',
    });
    this.belongsTo(models.ctbProveedoresSolicitudes, {
      as: 'solicitud',
      foreignKey: 'idSolicitud',
    });
    this.hasMany(models.ctbProveedoresSolicitudes, {
      as: 'solicitudes',
      foreignKey: 'idRecurrente',
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
