'use strict';
const Sequelize = require('sequelize');
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
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  rolDinamico: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: 'Configurar si se dispara el modal para elegir el rol dinamicamente en Virtual',
    field: 'rol_dinamico',
  },
  fechaTest: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
    field: 'fecha_test',
  },
  fechaEntrega: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
    field: 'fecha_entrega',
  },
  tipoCliente: {
    type: DataTypes.ENUM('micro', 'macro'),
    allowNull: false,
    defaultValue: 'micro',
    field: 'tipo_cliente',
  },
  valorVenta: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: true,
    field: 'valor_venta',
  },
  nombreCompletoAsesor: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'nombre_completo_asesor',
  },
  celularAsesor: {
    type: DataTypes.STRING(20),
    allowNull: true,
    field: 'celular_asesor',
  },
  estado: {
    type: DataTypes.ENUM('pendiente', 'parametrizacion', 'testing', 'produccion'),
    allowNull: false,
    defaultValue: 'pendiente',
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
    this.hasMany(models.webSuscripciones, { as: 'suscripciones', foreignKey: 'idPropuesta' });
    this.belongsTo(models.webEmpresas, { as: 'empresa', foreignKey: 'idEmpresa' });
    this.hasMany(models.crmPropuestasResponsables, { as: 'propuestasResponsables', foreignKey: 'idPropuesta' });
    this.belongsToMany(models.admEmpleados, {
      through: { model: models.crmPropuestasResponsables },
      as: 'responsables',
      foreignKey: 'idPropuesta',
    });
    this.hasMany(models.webSuscripcionesPropuestasHistorial, { as: 'historial', foreignKey: 'idPropuesta' });
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
