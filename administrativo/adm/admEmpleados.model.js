'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');
const config = require('../../../config');

const TABLE_NAME = 'adm_empleados';
const MODEL_NAME = 'admEmpleados';

const Schema = {
  codemp: {
    type: DataTypes.STRING(30),
    allowNull: false,
    primaryKey: true,
  },
  nombreCompleto: {
    type: DataTypes.VIRTUAL,
    get() {
      const nomemp = this.getDataValue('nomemp');
      const apemp = this.getDataValue('apemp');

      return `${nomemp} ${apemp}`.replace(/\s+/g, ' ').trim();
    },
    set(value) {
      throw new Error('nombreCompleto es un campo virtual no se puede guardar');
    },
  },
  nomemp: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  apemp: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  tipide: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    references: {
      model: 'config_tipos_ident',
      key: 'id',
    },
  },
  fchnac: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  mailemp: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  sexemp: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  telemp: {
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  celemp: {
    type: DataTypes.STRING(12),
    allowNull: false,
  },
  passemp: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  diremp: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  sdapass: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cargo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'adm_cargos',
      key: 'codcrg',
    },
  },
  nomcargo: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  fotusr: {
    type: DataTypes.TEXT,
    allowNull: false,
    get() {
      const imageLocation = this.getDataValue('fotusr');
      const hostImage = config.images.host;
      if (!imageLocation) {
        return null;
      }
      return `${hostImage}${imageLocation}`;
    },
  },
  prfemp: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'perfil',
    references: {
      model: 'usuarios_perfil',
      key: 'id',
    },
  },
  dirgrp: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  stdemp: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: 'ACTIVO',
    comment: 'estado',
  },
  codinf: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: 'codigo verificacion',
  },
  sednom: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'sede razon social',
  },
  depuser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'adm_dependencias',
      key: 'coddep',
    },
  },
  nivEscolar: {
    type: DataTypes.ENUM('Ninguno', 'Preescolar', 'Primaria', 'Secundaria & Media'),
    allowNull: false,
    field: 'niv_escolar',
  },
  eps: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  fondo: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  banco: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'adm_bancos',
      key: 'id',
    },
  },
  nomCuenta: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'nom_cuenta',
  },
  tipoCuenta: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'tipo_cuenta',
  },
  nroCuenta: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'nro_cuenta',
  },
  ctbedt: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: 'Editar procesos contables',
  },
  updusr: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  fchupd: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  entrevista: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: 'Realiza entrevista',
  },
  updestudy: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  ultfirma: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  evalucion: {
    type: DataTypes.ENUM('Empleado', 'Docente', 'General'),
    allowNull: false,
    defaultValue: 'Empleado',
  },
  contratos: {
    type: DataTypes.STRING(50),
    allowNull: true,
    references: {
      model: 'adm_empleados_contrato',
      key: 'codcontrato',
    },
  },
  revisarProyectos: {
    type: DataTypes.STRING(80),
    allowNull: false,
    comment: 'revisar_test',
    field: 'revisar_proyectos',
  },
  paisNacimiento: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'adm_paises',
      key: 'id',
    },
    field: 'pais_nacimiento',
  },
  ciudadNacimiento: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'adm_ciudades',
      key: 'idCiudades',
    },
    field: 'ciudad_nacimiento',
  },
  credencial: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.usuarios, { as: 'usuarios', foreignKey: 'codemp' });
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
