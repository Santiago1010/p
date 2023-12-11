'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_compras_solicitudes';
const MODEL_NAME = 'ctbComprasSolicitudes';

const Schema = {
  idSolicitud: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_solicitud',
  },
  nombre: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  prioridad: {
    type: DataTypes.ENUM('baja', 'media', 'alta'),
    allowNull: false,
    defaultValue: 'media',
  },
  estado: {
    type: DataTypes.ENUM('nueva', 'aprobada', 'denegada', 'tramite', 'progreso', 'entregada'),
    allowNull: false,
    defaultValue: 'nueva',
  },
  descripcion: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  observacionDenegada: {
    type: DataTypes.STRING(500),
    allowNull: true,
    field: 'observacion_denegada',
  },
  idEmpleado: {
    type: DataTypes.STRING(30),
    allowNull: false,
    field: 'id_empleado',
  },
  idDepartamento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_departamento',
  },
  diasPasadosDesdeCreacion: {
    type: DataTypes.VIRTUAL,
    get() {
      const estado = this.getDataValue('estado');
      const createdAt = this.getDataValue('createdAt');

      if (estado === 'aprobada') {
        const creado = new Date(createdAt);
        const currentDate = new Date();
        const timeDifference = currentDate - creado;
        const daysSinceCreation = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        return daysSinceCreation;
      }

      return 'No aplica';
    },
    set(value) {
      throw new Error('`diasPasadosDesdeCreacion` es un campo virtual, no se puede guardar');
    },
  },
  diasPasadosDesdeActualizacion: {
    type: DataTypes.VIRTUAL,
    get() {
      const estado = this.getDataValue('estado');
      const updatedAt = this.getDataValue('updatedAt');

      if (estado === 'aprobada') {
        const actualizado = new Date(updatedAt);
        const currentDate = new Date();
        const timeDifference = currentDate - actualizado;
        const daysSinceCreation = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        return daysSinceCreation;
      }

      return 'No aplica';
    },
    set(value) {
      throw new Error('`diasPasadosDesdeActualizacion` es un campo virtual, no se puede guardar');
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
    allowNull: true,
    field: 'deleted_at',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.admEmpleados, {
      foreignKey: 'idEmpleado',
      as: 'solicitante',
    });
    this.belongsTo(models.Departamentos, {
      foreignKey: 'idDepartamento',
      as: 'departamento',
    });
    this.hasMany(models.ctbComprasOrdenes, {
      foreignKey: 'idSolicitud',
      as: 'ordenes',
    });
    this.hasMany(models.ctbComprasSolicitudesDetalle, {
      foreignKey: 'idSolicitud',
      as: 'solicitudesDetalle',
    });
    this.hasOne(models.webSuscripcionesEgresos, { as: 'suscripcionEgreso', foreignKey: 'idCompraSolicitud' });
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
