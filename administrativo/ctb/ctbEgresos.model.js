'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_egresos';
const MODEL_NAME = 'ctbEgresos';

const Schema = {
  idEgreso: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_egreso',
  },
  idSuscripcion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_suscripciones',
      key: 'id_suscripcion',
    },
    field: 'id_suscripcion',
  },
  valor: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
  idCentroCosto: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ctb_centros_costos',
      key: 'id_centro_costo',
    },
    field: 'id_centro_costo',
  },
  idProveedorSolicitud: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ctb_proveedores_solicitudes',
      key: 'id',
    },
    unique: 'web_suscripciones_egresos_ibfk_3',
    field: 'id_proveedor_solicitud',
  },
  idCajaMenorEgreso: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ctb_caja_menor_egresos',
      key: 'id_egreso',
    },
    unique: 'web_suscripciones_egresos_ibfk_4',
    field: 'id_caja_menor_egreso',
  },
  idCompraSolicitud: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ctb_compras_solicitudes',
      key: 'id_solicitud',
    },
    unique: 'web_suscripciones_egresos_ibfk_5',
    field: 'id_compra_solicitud',
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
    this.belongsTo(models.webSuscripciones, { as: 'suscripcion', foreignKey: 'idSuscripcion' });
    this.belongsTo(models.ctbCajaMenorEgresos, {
      as: 'cajaMenorEgreso',
      foreignKey: 'idCajaMenorEgreso',
    });
    this.belongsTo(models.ctbCentrosCostos, { as: 'centroCosto', foreignKey: 'idCentroCosto' });
    this.belongsTo(models.ctbComprasSolicitudes, {
      as: 'solicitudCompra',
      foreignKey: 'idCompraSolicitud',
    });
    this.belongsTo(models.ctbProveedoresSolicitudes, {
      as: 'solicitudProveedor',
      foreignKey: 'idProveedorSolicitud',
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
