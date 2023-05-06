'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_eventos_asistencias';
const MODEL_NAME = 'webEventosAsistencias';

const Schema = {
  idEventoAsistencia: {
    type: DataTypes.INTEGER,
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
  },
  idEvento: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_eventos',
      key: 'id_eventos',
    },
    field: 'id_evento',
  },
  timemodified: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  vista: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  joinTime: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'join_time',
  },
  leaveTime: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'leave_time',
  },
  leaveReason: {
    type: DataTypes.STRING(200),
    allowNull: true,
    field: 'leave_reason',
  },
  location: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  ipAddress: {
    type: DataTypes.STRING(200),
    allowNull: true,
    field: 'ip_address',
  },
  networkType: {
    type: DataTypes.STRING(200),
    allowNull: true,
    field: 'network_type',
  },
  userName: {
    type: DataTypes.STRING(200),
    allowNull: true,
    field: 'user_name',
  },
  device: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  uuid: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  meetDate: {
    type: DataTypes.STRING(200),
    allowNull: true,
    field: 'meet_date',
  },
  estado: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 1,
    comment: '1 = asistion, 2 = no asistio, 3 = con excusa',
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
