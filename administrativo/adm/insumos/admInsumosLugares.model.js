'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'adm_insumos_lugares';
const MODEL_NAME = 'admInsumosLugares';

const Schema = {
  idLugar: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'id_lugar',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(350),
    allowNull: false,
  },
  tipo: {
    type: DataTypes.ENUM('almacen', 'bodega'),
    allowNull: false,
    defaultValue: 'almacen',
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
    this.hasMany(models.admInsumosLugaresResponsable, {
      foreignKey: 'idLugar',
      as: 'lugaresResponsables',
    });
    this.belongsToMany(models.admEmpleados, {
      through: { model: models.admInsumosLugaresResponsable },
      foreignKey: 'idLugar',
      as: 'responsables',
    });
    this.hasMany(models.admInsumosInventarios, {
      foreignKey: 'idLugar',
      as: 'inventarios',
    });
    this.hasMany(models.admInsumosMovimientos, {
      foreignKey: 'idLugarOrigen',
      as: 'movimientos',
    });
    this.hasMany(models.admInsumosMovimientosDetalle, {
      foreignKey: 'idLugarDestino',
      as: 'movimientosDetalles',
    });
    this.hasMany(models.admInsumosOrdenes, {
      foreignKey: 'idLugar',
      as: 'ordenes',
    });
    this.hasMany(models.admInsumosProductosLugares, {
      foreignKey: 'idLugar',
      as: 'productosLugares',
    });
    this.belongsToMany(models.admInsumosProductos, {
      through: { model: models.admInsumosProductosLugares },
      foreignKey: 'idLugar',
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
