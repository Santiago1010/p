'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_novedades_nom';
const MODEL_NAME = 'ctbNovedadesNom';

const Schema = {
  codigo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  concepto: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'ctb_novedad_tipos',
      key: 'codigo',
    },
  },
  codcontrato: {
    type: DataTypes.STRING(80),
    allowNull: true,
    references: {
      model: 'adm_empleados_contrato',
      key: 'codcontrato',
    },
  },
  codusr: {
    type: DataTypes.STRING(30),
    allowNull: true,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
  },
  hora: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  dia: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  valor: {
    type: DataTypes.DECIMAL(10, 0),
    allowNull: true,
  },
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_fin',
  },
  diasNoHabiles: {
    type: DataTypes.STRING(5),
    allowNull: true,
    field: 'dias_no_habiles',
  },
  obersavacion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  addusr: {
    type: DataTypes.STRING(30),
    allowNull: false,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
  },
  fchadd: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('0', '1', '2', '3'),
    allowNull: true,
    defaultValue: '0',
    comment: "'0=Generada','1=Pagada','2=Aplazada','3=Eliminada'",
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
    this.belongsTo(models.admEmpleados, { as: 'empleado', foreignKey: 'codusr' });
    this.belongsTo(models.admEmpleados, { as: 'empleadoGenera', foreignKey: 'addusr' });
    this.belongsTo(models.admEmpleadosContrato, { as: 'contrato', foreignKey: 'codcontrato' });
    this.belongsTo(models.ctbNovedadTipos, { as: 'tipo', foreignKey: 'concepto' });
    this.hasMany(models.ctbNovedadCambios, { as: 'cambios', foreignKey: 'codnovd' });
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
