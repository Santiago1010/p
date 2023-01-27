const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_preguntas';
const MODEL_NAME = 'testPreguntas';

const Schema = {
  codpre: {
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  descripcionEn: {
    field: 'descripcion_en',
    type: DataTypes.TEXT,
  },
  tipo: {
    type: DataTypes.INTEGER,
  },
  tipoOpcion: {
    field: 'tipo_opcion',
    type: DataTypes.ENUM('multiple', 'unica', 'abierta', 'nivel'),
  },
  indice: {
    type: DataTypes.INTEGER,
  },
  estado: {
    type: DataTypes.ENUM('ACTIVO', 'INACTIVO'),
  },
  opcionesCorrectas: {
    field: 'opciones_correctas',
    type: DataTypes.INTEGER,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.testTipo, { as: 'tipoCerebro', foreignKey: 'tipo' });
    this.belongsToMany(models.testGeneral, {
      through: { model: models.testGeneralPreguntas },
      as: 'tests',
      foreignKey: 'idPregunta',
    });
    this.belongsToMany(models.testOpciones, {
      through: { model: models.testPreguntasOpciones },
      as: 'opciones',
      foreignKey: 'idPregunta',
    });
    this.hasMany(models.testResdetalle, { as: 'testDetalle', foreignKey: 'idTestResgeneral' });
    this.hasMany(models.webCursosModulosLecciones, { as: 'moduloLeccion', foreignKey: 'testCodpre' });
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
