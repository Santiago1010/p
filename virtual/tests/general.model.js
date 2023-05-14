const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_general';
const MODEL_NAME = 'testGeneral';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  codtest: DataTypes.STRING(15),
  titulo: DataTypes.STRING(50),
  descripcion: DataTypes.STRING(150),
  tipo: DataTypes.STRING(150),
  desde: DataTypes.INTEGER,
  hasta: DataTypes.INTEGER,
  totalPreguntas: {
    field: 'total_preguntas',
    type: DataTypes.INTEGER,
  },
  estado: DataTypes.ENUM('ACTIVO', 'INACTIVO'),
  tipoTest: {
    field: 'tipo_test',
    type: DataTypes.ENUM('test', 'encuesta', 'quiz'),
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.testResgeneral, { as: 'respuestasTests', foreignKey: 'idTest' });
    this.belongsToMany(models.testPreguntas, {
      through: { model: models.testGeneralPreguntas },
      as: 'preguntas',
      foreignKey: 'idTestGeneral',
    });
    this.hasMany(models.webCursosQuiz, { as: 'cursosQuiz', foreignKey: 'idTestGeneral' });
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
