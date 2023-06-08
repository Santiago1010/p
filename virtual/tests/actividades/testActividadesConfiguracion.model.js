'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_actividades_configuracion';
const MODEL_NAME = 'testActividadesConfiguracion';

const Schema = {
  idConfiguracion: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_configuracion',
  },
  idActividad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'test_actividades',
      key: 'id_actividad',
    },
    field: 'id_actividad',
  },
  idCerebro: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'test_cerebros',
      key: 'id',
    },
    field: 'id_cerebro',
  },
  idHabilidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'test_habilidades',
      key: 'id_habilidad',
    },
    field: 'id_habilidad',
  },
  orden: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
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
    this.belongsTo(models.testActividades, { as: 'actividad', foreignKey: 'idActividad' });
    this.hasMany(models.testActividadesProgresoUsuarios, {
      as: 'progresoUsuarios',
      foreignKey: 'idConfiguracion',
    });
    this.belongsTo(models.testCerebros, { as: 'cerebro', foreignKey: 'idCerebro' });
    this.belongsTo(models.testHabilidades, { as: 'habilidad', foreignKey: 'idHabilidad' });
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
