'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'view_usuarios_stats';
const MODEL_NAME = 'viewUsuariosStats';

const Schema = {
  idUsuario: {
    field: 'id_usuario',
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  idEmpresa: {
    field: 'id_empresa',
    type: DataTypes.INTEGER,
  },
  cursosAprobados: {
    field: 'cursos_aprobados',
    type: DataTypes.DECIMAL(23, 0),
  },
  cursosFinalizados: {
    field: 'cursos_finalizados',
    type: DataTypes.DECIMAL(23, 0),
  },
  cursosProgreso: {
    field: 'cursos_progreso',
    type: DataTypes.DECIMAL(23, 0),
  },
  tiempoEstudio: {
    field: 'tiempo_estudio',
    type: DataTypes.DECIMAL(23, 0),
  },
  leccionesFinalizadas: {
    field: 'lecciones_finalizadas',
    type: DataTypes.DECIMAL(23, 0),
  },
  totalComentarios: {
    field: 'total_comentarios',
    type: DataTypes.BIGINT,
  },
  totalRespuestas: {
    field: 'total_respuestas',
    type: DataTypes.BIGINT,
  },
  puntosActual: {
    field: 'puntos',
    type: DataTypes.DECIMAL(27, 0),
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webUsuariosEmpresas, { as: 'usuariosEmpresa', foreignKey: 'idEmpresa' });
    this.hasOne(models.webUsuariosEmpresas, { as: 'usuarioEmpresa', foreignKey: 'idUsuario' });
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
