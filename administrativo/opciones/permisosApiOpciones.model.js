'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'permisos_api_opciones';
const MODEL_NAME = 'permisosApiOpciones';

const Schema = {
  idPermiso: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_permiso',
  },
  descripcion: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  idOpcion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'opciones',
      key: 'id',
    },
    field: 'id_opcion',
  },
  urlApi: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'url_api',
  },
  metodo: {
    type: DataTypes.STRING(30),
    allowNull: false,
    comment: 'GET, POST, PUT, DELETE, PATCH -> individual o lista separada por comas ',
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
    this.belongsTo(models.Opciones, { as: 'opcion', foreignKey: 'idOpcion' });
    this.hasMany(models.permisosApiOpcionesUsuarios, { as: 'permisosUsuarios', foreignKey: 'idPermiso' });
    this.belongsToMany(models.Usuarios, {
      through: { model: models.permisosApiOpcionesUsuarios },
      as: 'usuarios',
      foreignKey: 'idPermiso',
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
