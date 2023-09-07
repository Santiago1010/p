'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_caja_menor';
const MODEL_NAME = 'ctbCajaMenor';

const Schema = {
  idCajaMenor: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_caja_menor',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  valorActual: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'valor_actual',
  },
  valorMaximo: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    field: 'valor_maximo',
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
    defaultValue: null,
    allowNull: true,
    field: 'deleted_at',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    // this.hasMany(models.ctbCajaMenorEgresos, {
    //   foreignKey: 'cajaMenorId',
    // });
    // this.hasMany(models.ctbCajaMenorIngresos, {
    //   foreignKey: 'cajaMenorId',
    // });
    this.hasMany(models.ctbCajaMenorResponsables, {
      foreignKey: 'idCajaMenor',
      as: 'cajaMenorResponsables',
    });
    this.belongsToMany(models.admEmpleados, {
      through: { model: models.ctbCajaMenorResponsables },
      foreignKey: 'idCajaMenor',
      as: 'responsables',
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
