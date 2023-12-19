'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'adm_insumos_inventarios';
const MODEL_NAME = 'admInsumosInventarios';

const Schema = {
  idInventario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'id_inventario',
  },
  idLugar: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_lugar',
  },
  idEmpleado: {
    type: DataTypes.STRING(30),
    allowNull: false,
    field: 'id_empleado',
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
    this.belongsTo(models.admInsumosLugares, {
      foreignKey: 'idLugar',
      as: 'lugar',
    });
    this.belongsTo(models.admEmpleados, {
      foreignKey: 'idEmpleado',
      as: 'empleado',
    });
    this.hasMany(models.admInsumosInventariosDetalle, {
      foreignKey: 'idInventario',
      as: 'detalles',
    });
    this.belongsToMany(models.admInsumosProductos, {
      through: models.admInsumosInventariosDetalle,
      foreignKey: 'idInventario',
      as: 'productos',
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
