const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_general_preguntas';
const MODEL_NAME = 'testGeneralPreguntas';

const Schema = {
  idTestGeneral: {
    field: 'id_test_general',
    type: DataTypes.INTEGER,
  },
  idPregunta: {
    field: 'id_pregunta',
    type: DataTypes.INTEGER,
  },
};

class ExtendedModel extends Model {
  static associate(models) {}

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
