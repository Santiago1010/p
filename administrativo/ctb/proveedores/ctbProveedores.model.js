'use strict';
const { Model, DataTypes } = require('sequelize');
//const config = require('../../../config');

const TABLE_NAME = 'ctb_proveedores';
const MODEL_NAME = 'ctbProveedores';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  tipoPersona: {
    type: DataTypes.STRING(1),
    allowNull: false,
    defaultValue: 'n',
    field: 'tipo_persona',
  },
  tipoDocumento: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ctb_proveedores_tipos_ident',
      key: 'id',
    },
    field: 'tipo_documento',
  },
  documento: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  nombreComercial: {
    type: DataTypes.STRING(150),
    allowNull: true,
    field: 'nombre_comercial',
  },
  nombres: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  apellidos: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  pNombre: {
    type: DataTypes.STRING(80),
    allowNull: true,
    field: 'p_nombre',
  },
  sNombre: {
    type: DataTypes.STRING(80),
    allowNull: true,
    field: 's_nombre',
  },
  pApellido: {
    type: DataTypes.STRING(80),
    allowNull: true,
    field: 'p_apellido',
  },
  sApellido: {
    type: DataTypes.STRING(80),
    allowNull: true,
    field: 's_apellido',
  },
  celular: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  direccion: {
    type: DataTypes.STRING(250),
    allowNull: true,
  },
  pais: {
    type: DataTypes.STRING(2),
    allowNull: true,
    references: {
      model: 'adm_paises',
      key: 'Codigo',
    },
  },
  ciudad: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'adm_ciudades',
      key: 'idCiudades',
    },
  },
  banco: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'adm_bancos',
      key: 'id',
    },
  },
  cuentaPropia: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    field: 'cuenta_propia',
  },
  nombreTitular: {
    type: DataTypes.STRING(80),
    allowNull: true,
    defaultValue: '',
    field: 'nombre_titular',
  },
  documentoTitular: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: '',
    field: 'documento_titular',
  },
  tipoCuenta: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: '',
    field: 'tipo_cuenta',
  },
  numeroCuenta: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: '',
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
    allowNull: true,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  pregunta: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  respPregunta: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'resp_pregunta',
  },
  rut: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  soporteEps: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'soporte_eps',
  },
  certificacionBancaria: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'certificacion_bancaria',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.ctbProveedoresTiposIdent, {
      foreignKey: 'tipoDocumento',
      as: 'tipoDocumentoProveedor',
    });
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
      timestamps: false,
    };
  }
}

module.exports = { Schema, ExtendedModel };
