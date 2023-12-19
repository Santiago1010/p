'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'ctb_novedad_tipos';
const MODEL_NAME = 'ctbNovedadTipos';

const Schema = {
  codigo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  tipo: {
    type: DataTypes.ENUM('Ingreso', 'Deducción'),
    allowNull: true,
  },
  generado: {
    type: DataTypes.ENUM('Usuario', 'Sistema'),
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
  forma: {
    type: DataTypes.ENUM('valor', 'fecha', 'dia', 'hora'),
    allowNull: true,
    defaultValue: 'valor',
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
    this.hasMany(models.ctbNovedadUser, { as: 'novedadesResponsables', foreignKey: 'codnov' });
    this.belongsTo(models.admEmpleados, { as: 'empleado', foreignKey: 'addusr' });
    this.hasMany(models.ctbNovedadesNom, { as: 'novedadesNomina', foreignKey: 'concepto' });
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
