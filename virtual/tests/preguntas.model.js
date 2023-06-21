const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_preguntas';
const MODEL_NAME = 'testPreguntas';

const Schema = {
  codpre: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  descripcionEn: {
    field: 'descripcion_en',
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tipoOpcion: {
    field: 'tipo_opcion',
    type: DataTypes.ENUM('multiple', 'unica', 'abierta', 'nivel'),
    defaultValue: 'nivel',
    allowNull: false,
  },
  indice: {
    type: DataTypes.INTEGER,
  },
  opcionesCorrectas: {
    field: 'opciones_correctas',
    type: DataTypes.INTEGER,
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
    this.belongsTo(models.testTipo, { as: 'tipoCerebro', foreignKey: 'tipo' });
    this.hasMany(models.testGeneralPreguntas, { as: 'testsPreguntas', foreignKey: 'idPregunta' });
    this.belongsToMany(models.testGeneral, {
      through: { model: models.testGeneralPreguntas },
      as: 'tests',
      foreignKey: 'idPregunta',
    });
    this.hasMany(models.testPreguntasOpciones, { as: 'preguntasOpciones', foreignKey: 'idPregunta' });
    this.belongsToMany(models.testOpciones, {
      through: { model: models.testPreguntasOpciones },
      as: 'opciones',
      foreignKey: 'idPregunta',
    });
    this.hasMany(models.testResdetalle, { as: 'testDetalle', foreignKey: 'idTestResgeneral' });
    this.hasMany(models.webCursosModulosLecciones, { as: 'moduloLeccion', foreignKey: 'testCodpre' });
    this.hasMany(models.webCursosQuizResdetalle, { as: 'quizResdetalle', foreignKey: 'idPregunta' });
    this.hasMany(models.webCurriculosEvaluacionesResdetalle, { as: 'evaluacionResdetalle', foreignKey: 'idPregunta' });
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
