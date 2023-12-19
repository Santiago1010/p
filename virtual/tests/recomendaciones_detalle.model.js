const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_recomendaciones_detalle';
const MODEL_NAME = 'testRecomendacionesDetalle';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(350),
    allowNull: true,
  },
  idRecomendacion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'test_recomendaciones',
      key: 'id',
    },
    field: 'id_recomendacion',
  },
  idCerebro: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'test_cerebros',
      key: 'id',
    },
    field: 'id_cerebro',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.testRecomendaciones, { as: 'recomendacion', foreignKey: 'idRecomendacion' });
    this.belongsTo(models.testCerebros, { as: 'cerebro', foreignKey: 'idCerebro' });
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
