'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones_rutas_aprendizaje';
const MODEL_NAME = 'webSuscripcionesRutasAprendizaje';

const Schema = {
  id: {
    field: 'id_suscripcion_ruta_aprendizaje',
    type: DataTypes.INTEGER,
    autoincrement: true,
    primaryKey: true,
  },
  idSuscripcion: {
    field: 'id_suscripcion',
    type: DataTypes.INTEGER,
  },
  idRutaAprendizaje: {
    field: 'id_ruta_aprendizaje',
    type: DataTypes.INTEGER,
  },
  idUsuario: {
    field: 'id_usuario',
    type: DataTypes.INTEGER,
  },
  orden: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webRutasAprendizaje, { as: 'rutaAprendizaje', foreignKey: 'idRutaAprendizaje' });
    this.belongsTo(models.webSuscripciones, { as: 'suscripcion', foreignKey: 'idSuscripcion' });
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
