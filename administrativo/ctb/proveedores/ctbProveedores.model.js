'use strict';
const { Model, DataTypes } = require('sequelize');
//const config = require('../../../config');

const TABLE_NAME = 'ctb_proveedores';
const MODEL_NAME = 'ctbProveedores';

const Schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipoPersona: {
    type: DataTypes.STRING(1),
    allowNull: false,
    defaultValue: 'n',
    field: 'tipo_persona',
  },
  tipoDocumento: {
    type: DataTypes.INTEGER,
    field: 'tipo_documento',
  },
  documento: {
    type: DataTypes.STRING(150),
  },
  nombreComercial: {
    type: DataTypes.STRING(150),
    field: 'nombre_comercial',
  },
  nombres: {
    type: DataTypes.STRING(150),
  },
  apellidos: {
    type: DataTypes.STRING(150),
  },
  pNombre: {
    type: DataTypes.STRING(80),
    field: 'p_nombre',
  },
  sNombre: {
    type: DataTypes.STRING(80),
    field: 's_nombre',
  },
  pApellido: {
    type: DataTypes.STRING(80),
    field: 'p_apellido',
  },
  sApellido: {
    type: DataTypes.STRING(80),
    field: 's_apellido',
  },
  celular: {
    type: DataTypes.STRING(20),
  },
  email: {
    type: DataTypes.STRING(100),
  },
  direccion: {
    type: DataTypes.STRING(250),
  },
  pais: {
    type: DataTypes.STRING(2),
  },
  ciudad: {
    type: DataTypes.INTEGER,
  },
  banco: {
    type: DataTypes.INTEGER,
  },
  cuentaPropia: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    field: 'cuenta_propia',
  },
  nombreTitular: {
    type: DataTypes.STRING(80),
    field: 'nombre_titular',
  },
  documentoTitular: {
    type: DataTypes.STRING(20),
    field: 'documento_titular',
  },
  tipoCuenta: {
    type: DataTypes.STRING(50),
    field: 'tipo_cuenta',
  },
  numeroCuenta: {
    type: DataTypes.STRING(50),
    field: 'numero_cuenta',
  },
  declaranteRenta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: 'declarante_renta',
  },
  firma: {
    type: DataTypes.TEXT,
  },
  password: {
    type: DataTypes.TEXT,
  },
  pregunta: {
    type: DataTypes.STRING(100),
  },
  respPregunta: {
    type: DataTypes.STRING(100),
    field: 'resp_pregunta',
  },
  rut: {
    type: DataTypes.STRING(100),
  },
  soporteEps: {
    type: DataTypes.STRING(100),
    field: 'soporte_eps',
  },
  certificacionBancaria: {
    type: DataTypes.STRING(100),
    field: 'certificacion_bancaria',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    /*this.belongsTo(models.ctb_proveedores_tipos_ident, {
      foreignKey: 'tipo_documento',
      as: 'tipoDocumento',
    });*/
    this.belongsTo(models.admPaises, {
      foreignKey: 'pais',
      as: 'paisProveedor',
    });
    this.belongsTo(models.admBancos, {
      foreignKey: 'banco',
      as: 'bancoProveedor',
    });
    this.belongsTo(models.admCiudades, {
      foreignKey: 'ciudad',
      as: 'ciudadProveedor',
    });
    this.hasMany(models.acfSolicitudesOrdenes, { as: 'ordenes', foreignKey: 'idProveedor' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: MODEL_NAME,
    };
  }
}

module.exports = { Schema, ExtendedModel };
