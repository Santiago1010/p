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
  titulo: DataTypes.STRING(2000),
  subtitulo: DataTypes.STRING(200),
  descripcion: DataTypes.TEXT,
  desde: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  hasta: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  portada: {
    type: DataTypes.STRING(150),
    allowNull: true,
    defaultValue: 'https://virtualapidev.thebiznation.com/bizdata/api/v1/home/archivo/15134510383/44638892038',
  },
  tipoTest: {
    field: 'tipo_test',
    type: DataTypes.ENUM('test', 'encuesta', 'quiz'),
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
    this.hasMany(models.testResgeneral, { as: 'respuestasTests', foreignKey: 'idTest' });
    this.hasMany(models.testGeneralPreguntas, { as: 'testPreguntas', foreignKey: 'idTestGeneral' });
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
      timestamps: true,
      paranoid: true,
    };
  }
}

module.exports = { Schema, ExtendedModel };
