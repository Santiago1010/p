const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_session_reporte_cerebro';
const MODEL_NAME = 'testSessionReporteCerebro';

const Schema = {
  descripcion: DataTypes.TEXT,
  recurso: DataTypes.STRING(200),
  idCerebroDominante: {
    field: 'id_cerebro_dominante',
    type: DataTypes.INTEGER,
  },
  idCerebroSubDominante: {
    field: 'id_cerebro_subdominante',
    type: DataTypes.INTEGER,
  },
  idReporte: {
    field: 'id_session_reporte',
    type: DataTypes.INTEGER,
  },
  estado: DataTypes.INTEGER,
  updusr: DataTypes.STRING(30),
  fchadd: DataTypes.DATE,
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.testSessionReportes, { as: 'reporte', foreignKey: 'idReporte' });
    this.belongsTo(models.testCerebros, { as: 'cerebroDominante', foreignKey: 'idCerebroDominante' });
    this.belongsTo(models.testCerebros, { as: 'cerebroSubDominante', foreignKey: 'idCerebroSubDominante' });
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
