const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_opciones';
const MODEL_NAME = 'testOpciones';

const Schema = {
  titulo: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsToMany(models.testPreguntas, {
      through: { model: models.testPreguntasOpciones },
      as: 'preguntas',
      foreignKey: 'idOpcion',
    });
    this.hasMany(models.testResdetalle, { as: 'testDetalle', foreignKey: 'idTestResgeneral' });
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
