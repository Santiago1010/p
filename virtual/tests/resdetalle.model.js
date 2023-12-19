'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_resdetalle';
const MODEL_NAME = 'testResdetalle';

const Schema = {
  idTestResgeneral: {
    field: 'id_test_resgeneral',
    type: DataTypes.INTEGER,
  },
  codpre: DataTypes.INTEGER,
  idOpcion: {
    field: 'id_opcion',
    type: DataTypes.INTEGER,
  },
  resppre: {
    type: DataTypes.STRING,
  },
  fchevld: {
    type: DataTypes.DATEONLY,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.testResgeneral, { as: 'testResgeneral', foreignKey: 'idTestResgeneral' });
    this.belongsTo(models.testOpciones, { as: 'opcion', foreignKey: 'idOpcion' });
    this.belongsTo(models.testPreguntas, { as: 'pregunta', foreignKey: 'codpre' });
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
