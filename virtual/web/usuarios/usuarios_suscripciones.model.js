'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_usuarios_suscripciones';
const MODEL_NAME = 'webUsuariosSuscripciones';

const Schema = {
  id: {
    field: 'id_usuario_suscripcion',
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idUsuario: {
    field: 'id_usuario',
    type: DataTypes.INTEGER,
  },
  idSuscripcion: {
    field: 'id_suscripcion',
    type: DataTypes.INTEGER,
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
  estado: {
    type: DataTypes.VIRTUAL,
    get() {
      let deletedAt = this.getDataValue('deletedAt');
      return deletedAt ? 0 : 1;
    },
    set(value) {
      throw new Error('Estado es un campo virtual no se puede guardar');
    },
  },
};

class ExtendedModel extends Model {
  static associate(models) {}

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
