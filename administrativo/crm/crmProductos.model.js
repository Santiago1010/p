'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'crm_productos';
const MODEL_NAME = 'crmProductos';

const Schema = {
  idProducto: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_producto',
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  tablaAsociada: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'tabla_asociada',
  },
  parametrizar: {
    type: DataTypes.VIRTUAL,
    get() {
      const tablaAsociada = this.getDataValue('tablaAsociada');
      return tablaAsociada ? tablaAsociada.replace('webSuscripciones', '').toLowerCase() : '';
    },
    set(value) {
      throw new Error('Estado es un campo virtual no se puede guardar');
    },
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
  estado: {
    type: DataTypes.VIRTUAL,
    get() {
      let deletedAt = this.getDataValue('deletedAt');
      return deletedAt ? 0 : 1;
    },
    set(value) {
      throw new Error('Estado es un campo virtual no se puede guardar');
    },
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.crmSuscripcionesProductos, { as: 'suscripcionesProductos', foreignKey: 'idProducto' });
    this.belongsToMany(models.webSuscripciones, {
      through: { model: models.crmSuscripcionesProductos },
      as: 'suscripciones',
      foreignKey: 'idProducto',
    });
    this.hasMany(models.crmProductosResponsables, { as: 'productosResponsables', foreignKey: 'idProducto' });
    this.belongsToMany(models.admEmpleados, {
      through: { model: models.crmProductosResponsables },
      as: 'responsables',
      foreignKey: 'idProducto',
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
