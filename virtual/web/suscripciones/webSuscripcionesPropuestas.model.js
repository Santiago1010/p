'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones_propuestas';
const MODEL_NAME = 'webSuscripcionesPropuestas';

const Schema = {
  idSuscripcionPropuesta: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_suscripcion_propuesta',
  },
  idEmpresa: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_empresas',
      key: 'id_empresa',
    },
    field: 'id_empresa',
  },
  idSede: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'Id de la sede donde se factura',
    references: {
      model: 'adm_sedes',
      key: 'codsed',
    },
    field: 'id_sede',
  },
  idFuente: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'config_fuentes',
      key: 'id_fuente',
    },
    field: 'id_fuente',
  },
  idRolComercial: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'config_rol_comercial',
      key: 'id_rol_comercial',
    },
    field: 'id_rol_comercial',
  },
  totalLicencias: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'total_licencias',
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
  nombre: {
    type: DataTypes.STRING(250),
    allowNull: false,
    defaultValue: 'Contrato',
  },
  descripcion: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  valor: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  iva: {
    type: DataTypes.DECIMAL(4, 3),
    allowNull: false,
    defaultValue: 0.19,
    comment: 'Iva en porcentaje',
  },
  total: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
    defaultValue: 0.0,
    comment: 'Total con iva',
  },
  nombreContacto: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'nombre_contacto',
  },
  celularContacto: {
    type: DataTypes.STRING(20),
    allowNull: true,
    field: 'celular_contacto',
  },
  emailContacto: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'email_contacto',
  },
  cargoContacto: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'cargo_contacto',
  },
  estado: {
    type: DataTypes.ENUM('pendiente', 'parametrizacion', 'testing', 'produccion'),
    allowNull: false,
    defaultValue: 'pendiente',
    comment:
      'Estado de la propuesta. Para los estados finalizado y desistido se validan con la fecha de fin y deleted_at',
    get() {
      const deletedAt = this.getDataValue('deletedAt');

      if (deletedAt !== null) {
        return 'desistido';
      }

      const estado = this.getDataValue('estado');

      if (estado === 'produccion') {
        const today = new Date();
        today.setUTCHours(5, 0, 0, 0);

        const fechaFin = new Date(this.getDataValue('fechaFin'));

        if (fechaFin.getTime() < today.getTime()) {
          return 'finalizado';
        }
      }

      return estado;
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
  deletedFor: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'deleted_for',
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webEmpresas, { as: 'empresa', foreignKey: 'idEmpresa' });
    this.belongsTo(models.admSedes, { as: 'sede', foreignKey: 'idSede' });
    this.belongsTo(models.configFuentes, { as: 'fuente', foreignKey: 'idFuente' });
    this.belongsTo(models.configRolComercial, { as: 'rolComercial', foreignKey: 'idRolComercial' });
    this.hasMany(models.webSuscripciones, { as: 'suscripciones', foreignKey: 'idPropuesta' });
    this.hasMany(models.webSuscripcionesPropuestasHistorial, { as: 'historial', foreignKey: 'idPropuesta' });
    this.hasMany(models.webPropuestasVendedores, { as: 'propuestasVendedores', foreignKey: 'idPropuesta' });
    this.belongsToMany(models.admEmpleados, {
      through: { model: models.webPropuestasVendedores },
      as: 'vendedores',
      foreignKey: 'idPropuesta',
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
