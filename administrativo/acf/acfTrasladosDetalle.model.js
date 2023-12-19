'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_traslados_detalle';
const MODEL_NAME = 'acfTrasladosDetalle';

const Schema = {
  idTrasladoDetalle: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_traslado_detalle',
  },
  idTraslado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_traslados',
      key: 'id_traslado',
    },
    field: 'id_traslado',
  },
  idEquipo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_equipos',
      key: 'id_equipo',
    },
    field: 'id_equipo',
  },
  idPrestamo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'acf_traslados',
      key: 'id_traslado',
    },
    field: 'id_prestamo',
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
    this.belongsTo(models.acfEquipos, { as: 'equipo', foreignKey: 'idEquipo' });
    this.belongsTo(models.acfTraslados, { as: 'traslado', foreignKey: 'idTraslado' });
    this.belongsTo(models.acfTraslados, { as: 'prestamo', foreignKey: 'idPrestamo' });
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
