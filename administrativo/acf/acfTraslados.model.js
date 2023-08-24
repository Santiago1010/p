'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'acf_traslados';
const MODEL_NAME = 'acfTraslados';

const Schema = {
  idTraslado: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_traslado',
  },
  tipo: {
    type: DataTypes.ENUM('prestamo', 'permanente', 'devolucion'),
    allowNull: false,
    defaultValue: 'permanente',
    comment: 'Traslados de equipos',
  },
  fechaTraslado: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'fecha_traslado',
  },
  fechaDevolucion: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_devolucion',
  },
  justificacion: {
    type: DataTypes.STRING(350),
    allowNull: true,
  },
  idUbicacionOrigen: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_ubicaciones',
      key: 'id_ubicacion',
    },
    field: 'id_ubicacion_origen',
  },
  idUbicacionDestino: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'acf_ubicaciones',
      key: 'id_ubicacion',
    },
    field: 'id_ubicacion_destino',
  },
  tipoPersona: {
    type: DataTypes.ENUM('interno', 'externo'),
    allowNull: false,
    defaultValue: 'interno',
    comment: 'tipo persona quien recibe el traslado',
    field: 'tipo_persona',
  },
  idEmpleadoGenera: {
    type: DataTypes.STRING(30),
    allowNull: false,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado_genera',
  },
  idEmpleadoRecibe: {
    type: DataTypes.STRING(30),
    allowNull: true,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado_recibe',
  },
  documentoExt: {
    type: DataTypes.STRING(20),
    allowNull: true,
    field: 'documento_ext',
  },
  nombresExt: {
    type: DataTypes.STRING(350),
    allowNull: true,
    field: 'nombres_ext',
  },
  emailExt: {
    type: DataTypes.STRING(200),
    allowNull: true,
    field: 'email_ext',
  },
  telefonoExt: {
    type: DataTypes.STRING(20),
    allowNull: true,
    field: 'telefono_ext',
  },
  direccionExt: {
    type: DataTypes.STRING(200),
    allowNull: true,
    field: 'direccion_ext',
  },
  ubicacionDestinoExt: {
    type: DataTypes.STRING(350),
    allowNull: true,
    field: 'ubicacion_destino_ext',
  },
  firmaRecibe: {
    type: DataTypes.STRING(200),
    allowNull: true,
    field: 'firma_recibe',
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
    this.hasMany(models.acfTrasladosDetalle, { as: 'detallesTraslado', foreignKey: 'idTraslado' });
    this.hasMany(models.acfTrasladosDetalle, { as: 'detallesPrestamo', foreignKey: 'idPrestamo' });
    this.belongsTo(models.acfUbicaciones, { as: 'ubicacionOrigen', foreignKey: 'idUbicacionOrigen' });
    this.belongsTo(models.acfUbicaciones, { as: 'ubicacionDestino', foreignKey: 'idUbicacionDestino' });
    this.belongsTo(models.admEmpleados, { as: 'empleadoGenera', foreignKey: 'idEmpleadoGenera' });
    this.belongsTo(models.admEmpleados, { as: 'empleadoRecibe', foreignKey: 'idEmpleadoRecibe' });
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
