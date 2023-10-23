'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../../../config');

const TABLE_NAME = 'acf_equipos';
const MODEL_NAME = 'acfEquipos';

const Schema = {
  idEquipo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_equipo',
  },
  idCategoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_categoria',
      key: 'id_categoria',
    },
    field: 'id_categoria',
  },
  nombre: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  serial: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  idArea: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'acf_areas',
      key: 'id_area',
    },
    field: 'id_area',
  },
  idUbicacion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'acf_ubicaciones',
      key: 'id_ubicacion',
    },
    field: 'id_ubicacion',
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
  presentacion: {
    type: DataTypes.ENUM('unidad', 'paquete'),
    allowNull: false,
    defaultValue: 'unidad',
    comment: 'Presentación de activo segun su cantidad',
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  imagen: {
    type: DataTypes.STRING(200),
    allowNull: false,
    get() {
      const imageLocation = this.getDataValue('imagen');
      const hostImage = config.images.host;
      if (!imageLocation) {
        return null;
      }
      return `${hostImage}${imageLocation}`;
    },
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.0,
    field: 'valor',
  },
  depreciacion: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.0,
  },
  fechaCaducidad: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_caducidad',
  },
  fechaGarantia: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_garantia',
  },
  modalidadAdquisicion: {
    type: DataTypes.ENUM('alquiler', 'compra', 'leasing', 'venta', 'duracion', 'compartido'),
    allowNull: false,
    defaultValue: 'compra',
    field: 'modalidad_adquisicion',
  },
  fechaAdquisicion: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'fecha_adquisicion',
  },
  nombreProveedor: {
    type: DataTypes.STRING(200),
    allowNull: true,
    field: 'nombre_proveedor',
  },
  observacion: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  estado: {
    type: DataTypes.ENUM('activo', 'prestamo', 'mantemiento', 'baja'),
    allowNull: false,
    defaultValue: 'activo',
    comment: 'Estado actual del activo',
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
    this.belongsTo(models.acfAreas, { as: 'area', foreignKey: 'idArea' });
    this.belongsTo(models.acfCategoria, { as: 'categoria', foreignKey: 'idCategoria' });
    this.belongsTo(models.admEmpleados, { as: 'empleado', foreignKey: 'idEmpleado' });
    this.belongsTo(models.acfUbicaciones, { as: 'ubicacion', foreignKey: 'idUbicacion' });
    this.hasMany(models.acfComponentes, { as: 'componentes', foreignKey: 'idEquipo' });
    this.hasMany(models.acfActasDetalle, { as: 'actasDetalles', foreignKey: 'idEquipo' });
    this.hasMany(models.acfBajasDetalle, { as: 'bajasDetalles', foreignKey: 'idEquipo' });
    this.hasMany(models.acfMovimientosDetalle, { as: 'movimientosDetalles', foreignKey: 'idEquipo' });
    this.hasMany(models.acfTrasladosDetalle, { as: 'trasladosDetalles', foreignKey: 'idEquipo' });
    this.hasMany(models.acfInventarioDetalle, { as: 'inventariosDetalles', foreignKey: 'idEquipo' });
    this.hasMany(models.acfSolicitudesDetalle, { as: 'solicitudesDetalles', foreignKey: 'idEquipo' });
    this.belongsToMany(models.acfActas, {
      through: { model: models.acfActasDetalle },
      foreignKey: 'idEquipo',
      as: 'actas',
    });
    this.belongsToMany(models.acfBajas, {
      through: { model: models.acfBajasDetalle },
      foreignKey: 'idEquipo',
      otherKey: 'idBaja',
      as: 'bajas',
    });
    this.belongsToMany(models.acfSolicitudes, {
      through: { model: models.acfSolicitudesDetalle },
      foreignKey: 'idEquipo',
      otherKey: 'idSolicitud',
      as: 'solicitudes',
    });
    this.belongsToMany(models.acfMovimientos, {
      through: { model: models.acfMovimientosDetalle },
      as: 'movimientos',
      foreignKey: 'idEquipo',
      otherKey: 'idMovimiento',
    });
    this.belongsToMany(models.acfInventario, {
      through: { model: models.acfInventarioDetalle },
      foreignKey: 'idEquipo',
      otherKey: 'idInventario',
      as: 'inventarios',
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
