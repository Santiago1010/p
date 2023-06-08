'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_actividades_progreso_usuarios';
const MODEL_NAME = 'testActividadesProgresoUsuarios';

const Schema = {
  idProgreso: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_progreso',
  },
  idConfiguracion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'test_actividades_configuracion',
      key: 'id_configuracion',
    },
    field: 'id_configuracion',
  },
  idUsuarioEmpresa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_usuarios_empresas',
      key: 'id_usuario_empresa',
    },
    field: 'id_usuario_empresa',
  },
  progreso: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: '0: pendiente, 1: completado',
  },
  puntaje: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    comment: 'Puntaje de actividades tipo evaluacion o autoEvaluacion',
  },
  idPrueba: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_empresas_test_pruebas',
      key: 'id_prueba',
    },
    field: 'id_prueba',
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
    this.belongsTo(models.testActividadesConfiguracion, {
      as: 'configuracion',
      foreignKey: 'idConfiguracion',
    });
    this.belongsTo(models.webEmpresasTestPruebas, { as: 'prueba', foreignKey: 'idPrueba' });
    this.belongsTo(models.webUsuariosEmpresas, { as: 'usuarioEmpresa', foreignKey: 'idUsuarioEmpresa' });
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
