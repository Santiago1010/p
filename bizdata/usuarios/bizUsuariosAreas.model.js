'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'biz_usuarios_areas';
const MODEL_NAME = 'bizUsuariosAreas';

const Schema = {
  idUsuarioArea: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_usuario_area',
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'biz_usuarios',
      key: 'id',
    },
    field: 'id_biz_usuario',
  },
  idEmpresaArea: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_empresas_areas',
      key: 'id_empresa_area',
    },
    field: 'id_area_empresa',
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.bizUsuarios, { as: 'usuario', foreignKey: 'idUsuario' });
    this.belongsTo(models.webEmpresasAreas, { as: 'area', foreignKey: 'idEmpresaArea' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: MODEL_NAME,
      timestamps: false,
    };
  }
}

module.exports = { Schema, ExtendedModel };
