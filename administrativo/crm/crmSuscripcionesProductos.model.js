'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'crm_suscripciones_productos';
const MODEL_NAME = 'crmSuscripcionesProductos';

const Schema = {
  idSuscripcionProducto: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_suscripcion_producto',
  },
  idSuscripcion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_suscripciones',
      key: 'id_suscripcion',
    },
    field: 'id_suscripcion',
    unique: 'suscripcion_producto_UN',
  },
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'crm_productos',
      key: 'id_producto',
    },
    field: 'id_producto',
    unique: 'suscripcion_producto_UN',
  },
  estadoResponsable: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
    comment: '0: Pendiente, 1: En progreso, 2: Finalizado',
    field: 'estado_responsable',
  },
  estadoResponsableString: {
    type: DataTypes.VIRTUAL,
    get() {
      const dicEstado = {
        0: 'Pendiente',
        1: 'Progreso',
        2: 'Finalizado',
      };
      const estado = this.getDataValue('estadoResponsable');
      return dicEstado[estado] || 'Invalido';
    },
  },
  estadoTester: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
    comment: '0: Pendiente, 1: En progreso, 2: Finalizado',
    field: 'estado_tester',
  },
  estadoTesterString: {
    type: DataTypes.VIRTUAL,
    get() {
      const dicEstado = {
        0: 'Pendiente',
        1: 'Progreso',
        2: 'Finalizado',
      };
      const estado = this.getDataValue('estadoTester');
      return dicEstado[estado] || 'Invalido';
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
    this.belongsTo(models.crmProductos, { as: 'producto', foreignKey: 'idProducto' });
    this.belongsTo(models.webSuscripciones, { as: 'suscripcion', foreignKey: 'idSuscripcion' });
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
