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
  diremp: {
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
  updusr: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  ultfirma: {
    type: DataTypes.STRING(80),
    allowNull: false,
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
    this.hasOne(models.Usuarios, { as: 'usuario', foreignKey: 'codemp' });
    this.hasMany(models.crmPropuestasResponsables, { as: 'propuestasResponsables', foreignKey: 'idResponsable' });
    this.belongsToMany(models.webSuscripcionesPropuestas, {
      through: { model: models.crmPropuestasResponsables },
      as: 'propuestas',
      foreignKey: 'idResponsable',
    });
    this.hasMany(models.crmProductosResponsables, { as: 'productosResponsables', foreignKey: 'idResponsable' });
    this.belongsToMany(models.crmProductos, {
      through: { model: models.crmProductosResponsables },
      as: 'productos',
      foreignKey: 'idResponsable',
    });
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
