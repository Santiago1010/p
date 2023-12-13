'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../../../../config');

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
    type: DataTypes.ENUM('natural', 'juridica'),
    allowNull: false,
    defaultValue: 'natural',
    field: 'tipo_persona',
  },
  idTipoIdent: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'config_tipos_ident',
      key: 'id',
    },
    field: 'id_tipo_ident',
  },
  documento: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: 'documento',
  },
  digitoVerificacion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Digito de verificación en caso de NIT',
    field: 'digito_verificacion',
  },
  nombreComercial: {
    type: DataTypes.STRING(150),
    allowNull: true,
    field: 'nombre_comercial',
  },
  razonSocial: {
    type: DataTypes.STRING(150),
    allowNull: true,
    field: 'razon_social',
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
  nombreCompleto: {
    type: DataTypes.VIRTUAL,
    get() {
      const nombres = this.getDataValue('nombres');
      const apellidos = this.getDataValue('apellidos');

      if (!nombres || !apellidos) return null;

      const completo = `${nombres} ${apellidos}`;

      var formattedString = completo.replace(/\s+/g, ' ');

      formattedString = formattedString.toLowerCase();

      formattedString = formattedString.replace(/(^|\s)\S/g, function (match) {
        return match.toUpperCase();
      });

      return formattedString;
    },
  },
  celular: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true,
    unique: 'email',
  },
  direccion: {
    type: DataTypes.STRING(250),
    allowNull: true,
  },
  idPais: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'adm_paises',
      key: 'id',
    },
    field: 'id_pais',
  },
  ciudad: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'adm_ciudades',
      key: 'idCiudades',
    },
  },
  declaranteRenta: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: 'declarante_renta',
  },
  firma: {
    type: DataTypes.STRING(200),
    get() {
      const firma = this.getDataValue('firma');

      if (!firma) return null;

      return `${config.images.host}${firma}`;
    },
    allowNull: true,
  },
  rut: {
    type: DataTypes.STRING(200),
    get() {
      const rut = this.getDataValue('rut');

      if (!rut) return null;

      return `${config.images.host}${rut}`;
    },
    allowNull: true,
  },
  soporteEps: {
    type: DataTypes.STRING(200),
    get() {
      const soporteEps = this.getDataValue('soporteEps');

      if (!soporteEps) return null;

      return `${config.images.host}${soporteEps}`;
    },
    allowNull: true,
    field: 'soporte_eps',
  },
  certificacionBancaria: {
    type: DataTypes.STRING(200),
    get() {
      const certificacionBancaria = this.getDataValue('certificacionBancaria');

      if (!certificacionBancaria) return null;

      return `${config.images.host}${certificacionBancaria}`;
    },
    allowNull: true,
    field: 'certificacion_bancaria',
  },
  idEmpleado: {
    type: DataTypes.STRING(30),
    allowNull: true,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado',
  },
  idEmpleadoGenera: {
    type: DataTypes.STRING(30),
    allowNull: true,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado_genera',
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: true,
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
    this.belongsTo(models.admPaises, {
      foreignKey: 'id_pais',
      as: 'paisProveedor',
    });
    this.belongsTo(models.admCiudades, {
      foreignKey: 'ciudad',
      as: 'ciudadProveedor',
    });
    this.belongsTo(models.admEmpleados, { as: 'empleado', foreignKey: 'idEmpleado' });
    this.belongsTo(models.admEmpleados, { as: 'empleadoGenera', foreignKey: 'idEmpleadoGenera' });
    this.belongsTo(models.configTiposIdentificacion, { as: 'tipoIdent', foreignKey: 'idTipoIdent' });
    this.hasMany(models.ctbProveedoresCuentas, { as: 'cuentas', foreignKey: 'idProveedor' });
    this.hasMany(models.ctbProveedoresSolicitudes, { as: 'solicitudes', foreignKey: 'idProveedor' });
    this.hasMany(models.ctbProveedoresSolicitudesRecurrentes, {
      as: 'solicitudesRecurrentes',
      foreignKey: 'idProveedor',
    });
    this.hasMany(models.acfSolicitudesOrdenes, { as: 'ordenes', foreignKey: 'idProveedor' });
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
