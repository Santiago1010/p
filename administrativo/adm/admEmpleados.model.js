'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../../../config');

const TABLE_NAME = 'adm_empleados';
const MODEL_NAME = 'admEmpleados';

const Schema = {
  codemp: {
    type: DataTypes.STRING(30),
    allowNull: false,
    primaryKey: true,
  },
  nomemp: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  apemp: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  nombreCompleto: {
    type: DataTypes.VIRTUAL,
    get() {
      const nomemp = this.getDataValue('nomemp');
      const apemp = this.getDataValue('apemp');

      const completo = `${nomemp} ${apemp}`;

      return completo.replace(/\s+/g, ' ').trim();
    },
    set(value) {
      throw new Error('nombreCompleto es un campo virtual no se puede guardar');
    },
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
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'adm_eps',
      key: 'id',
    },
  },
  fondo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'adm_fondo_pensiones',
      key: 'id',
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
    allowNull: true,
    get() {
      const imageLocation = this.getDataValue('ultfirma');
      const hostImage = config.images.host;
      if (!imageLocation) {
        return null;
      }
      return `${hostImage}${imageLocation}`;
    },
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
  arl: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    references: {
      model: 'adm_arl',
      key: 'id_arl',
    },
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
    field: 'deleted_at',
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
    this.belongsTo(models.admCargos, {
      foreignKey: 'cargo',
      as: 'cargoEmpleado',
    });
    this.belongsTo(models.admEps, {
      foreignKey: 'eps',
      as: 'epsEmpleado',
    });
    this.belongsTo(models.admArl, {
      foreignKey: 'arl',
      as: 'arlEmpleado',
    });
    this.belongsTo(models.admFondo, {
      foreignKey: 'fondo',
      as: 'fondoEmpleado',
    });
    this.belongsTo(models.admBancos, {
      foreignKey: 'banco',
      as: 'bancoEmpleado',
    });
    this.belongsTo(models.admPaises, {
      foreignKey: 'paisNacimiento',
      as: 'paisNacimientoEmpleado',
    });
    this.belongsTo(models.admCiudades, {
      foreignKey: 'ciudadNacimiento',
      as: 'ciudadNacimientoEmpleado',
    });
    this.hasMany(models.admEmpleadosEstudios, {
      as: 'estudios',
      foreignKey: 'codemp',
    });
    this.belongsTo(models.configTiposIdentificacion, {
      foreignKey: 'tipide',
      as: 'tipoIdentificacion',
    });
    this.hasMany(models.acfAreasResponsables, { as: 'areasResponsables', foreignKey: 'idEmpleado' });
    this.belongsToMany(models.acfAreas, {
      through: { model: models.acfAreasResponsables },
      as: 'areas',
      foreignKey: 'idEmpleado',
    });

    this.hasMany(models.acfEquipos, { as: 'equipos', foreignKey: 'idEmpleado' });
    this.hasMany(models.acfActas, { as: 'actas', foreignKey: 'idEmpleadoActa' });
    this.hasMany(models.acfActas, { as: 'actasRecibidas', foreignKey: 'idEmpleadoRecibe' });
    this.hasMany(models.acfBajas, { as: 'bajas', foreignKey: 'idEmpleadoGenera' });
    this.hasMany(models.acfBajas, { as: 'bajasAutorizadas', foreignKey: 'idEmpleadoAutoriza' });
    this.hasMany(models.acfMovimientos, { as: 'movimientos', foreignKey: 'idEmpleado' });
    this.hasMany(models.acfTraslados, { as: 'traslados', foreignKey: 'idEmpleadoGenera' });
    this.hasMany(models.acfTraslados, { as: 'trasladosRecibidos', foreignKey: 'idEmpleadoRecibe' });
    this.hasMany(models.acfHerramientas, { as: 'herramientasMfa', foreignKey: 'respMfa' });
    this.hasMany(models.acfHerramientasResponsables, { as: 'herramientasResponsables', foreignKey: 'idEmpleado' });
    this.hasMany(models.acfSolicitudes, { as: 'solicitudes', foreignKey: 'idEmpleado' });
    this.hasMany(models.acfSolicitudesOrdenes, { as: 'ordenesGeneradas', foreignKey: 'idEmpleadoGenera' });
    this.hasMany(models.acfSolicitudesOrdenes, {
      as: 'ordenesEjecutadas',
      foreignKey: 'idEmpleadoEjecuta',
    });

    this.belongsToMany(models.admInsumosLugares, {
      through: { model: models.admInsumosLugaresResponsable },
      foreignKey: 'idEmpleado',
      as: 'lugares',
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
