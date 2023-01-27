const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_tipo';
const MODEL_NAME = 'testTipo';

const Schema = {
  descripcion: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.TINYINT,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.testPreguntas, { as: 'preguntas', foreignKey: 'tipo' });
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
