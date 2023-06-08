const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_session_reportes_cerebros';
const MODEL_NAME = 'testSessionReportesCerebros';

const Schema = {
  idReporteCerebro: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_reporte_cerebro',
  },
  idReporte: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'test_session_reportes',
      key: 'id',
    },
    field: 'id_reporte',
  },
  idCerebro: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: 'Cerebro al que se le va a generar reporte (cerebro o de perfil)',
    references: {
      model: 'test_cerebros',
      key: 'id',
    },
    field: 'id_cerebro',
  },
  dominancia: {
    type: DataTypes.ENUM('dominante', 'subdominante', 'oscilante'),
    allowNull: false,
    defaultValue: 'dominante',
    comment: 'Dominancia del cerebro, para reportes de perfil siempres es dominante',
  },
  idCerebroSubdominante: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'Cerebro subdominante para reportes de perfil, para reporte cerebro se deja en NULL',
    references: {
      model: 'test_cerebros',
      key: 'id',
    },
    field: 'id_cerebro_subdominante',
  },
  tituloPagina: {
    type: DataTypes.STRING(255),
    allowNull: false,
    field: 'titulo_pagina',
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  ordenPagina: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    field: 'orden_pagina',
  },
  recurso: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  tipoRecurso: {
    type: DataTypes.BLOB,
    allowNull: true,
    field: 'tipo_recurso',
  },
  ordenRecurso: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    field: 'orden_recurso',
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
    this.belongsTo(models.testSessionReportes, { as: 'reporte', foreignKey: 'idReporte', targetKey: 'id' });
    this.belongsTo(models.testCerebros, { as: 'cerebro', foreignKey: 'idCerebro' });
    this.belongsTo(models.testCerebros, { as: 'cerebroSubdominante', foreignKey: 'idCerebroSubdominante' });
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
