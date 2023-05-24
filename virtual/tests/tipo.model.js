const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_tipo';
const MODEL_NAME = 'testTipo';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  descripcion: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  tipoTest: {
    type: DataTypes.ENUM('test', 'encuesta', 'quiz'),
    allowNull: false,
    field: 'tipo_test',
  },
  textos: {
    type: DataTypes.STRING(50),
    allowNull: false,
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
    this.hasMany(models.testPreguntas, { as: 'preguntas', foreignKey: 'tipo' });
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
