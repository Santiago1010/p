'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_eventos_asistencias';
const MODEL_NAME = 'webEventosAsistencias';

const Schema = {
  idEventoAsistencia: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    field: 'id_evento_asistencia',
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_usuarios',
      key: 'id_usuario',
    },
    field: 'id_usuario',
    unique: 'usuario_evento_UN',
  },
  idEvento: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_eventos',
      key: 'id_eventos',
    },
    field: 'id_evento',
    unique: ['usuario_evento_UN', 'email_evento_UN'],
  },
  nombre: {
    type: DataTypes.STRING(200),
    allowNull: true,
    comment: 'Nombre del usuario desde Zoom',
  },
  email: {
    type: DataTypes.STRING(200),
    allowNull: true,
    comment: 'Email del usuario desde Zoom',
    unique: 'email_evento_UN',
  },
  tipo: {
    type: DataTypes.ENUM('enVivo', 'grabacion'),
    allowNull: false,
    defaultValue: 'enVivo',
    comment: 'Tipo de asistencia del usuario al evento',
  },
  tiempo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Tiempo en reunion - segundos',
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
    this.belongsTo(models.webEventos, { as: 'evento', foreignKey: 'idEvento' });
    this.belongsTo(models.webUsuarios, { as: 'usuario', foreignKey: 'idUsuario' });
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
