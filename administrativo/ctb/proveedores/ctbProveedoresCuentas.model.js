'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_proveedores_cuentas';
const MODEL_NAME = 'ctbProveedoresCuentas';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
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
  idBanco: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'adm_bancos',
      key: 'id',
    },
    field: 'id_banco',
  },
  cuentaPropia: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1,
    field: 'cuenta_propia',
  },
  tipoCuenta: {
    type: DataTypes.ENUM('ahorro', 'corriente'),
    allowNull: false,
    defaultValue: 'ahorro',
    field: 'tipo_cuenta',
  },
  numeroCuenta: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'numero_cuenta',
  },
  titularNoPropia: {
    type: DataTypes.STRING(100),
    allowNull: true,
    comment: 'Nombre del titular de la cuenta cuando no es propia',
    field: 'titular_no_propia',
  },
  documentoNoPropia: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'documento_no_propia',
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
    this.hasMany(models.ctbProveedoresSolicitudes, { as: 'solicitudes', foreignKey: 'idCuenta' });
    this.belongsTo(models.ctbProveedores, { as: 'proveedor', foreignKey: 'idProveedor' });
    this.belongsTo(models.admBancos, { as: 'banco', foreignKey: 'idBanco' });
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
