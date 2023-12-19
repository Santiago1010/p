const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_preguntas_opciones';
const MODEL_NAME = 'testPreguntasOpciones';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  idPregunta: {
    field: 'id_pregunta',
    type: DataTypes.INTEGER,
  },
  idOpcion: {
    field: 'id_opcion',
    type: DataTypes.INTEGER,
  },
  respCorrecta: {
    field: 'resp_correcta',
    type: DataTypes.TINYINT,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.testPreguntas, {
      foreignKey: 'idPregunta',
      as: 'pregunta',
    });
    this.belongsTo(models.testOpciones, {
      foreignKey: 'idOpcion',
      as: 'opcion',
    });
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
