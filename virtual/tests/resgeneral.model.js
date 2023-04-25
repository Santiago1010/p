'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'test_resgeneral';
const MODEL_NAME = 'testResgeneral';

const Schema = {
  idTest: {
    field: 'id_test',
    type: DataTypes.INTEGER,
  },
  idWebUsuario: {
    field: 'id_web_usuario',
    type: DataTypes.STRING,
  },
  derecho: DataTypes.INTEGER,
  central: DataTypes.INTEGER,
  izquierdo: DataTypes.INTEGER,
  dominante: DataTypes.INTEGER,
  subdominante: DataTypes.INTEGER,
  error: DataTypes.INTEGER,
  actualizadoEnganche: { field: 'actualizado_enganche', type: DataTypes.TINYINT.UNSIGNED },

  derechoEjec: { field: 'derecho_ejec', type: DataTypes.DECIMAL(10, 2) },
  derechoSup: { field: 'derecho_sup', type: DataTypes.DECIMAL(10, 2) },
  derechoAse: { field: 'derecho_ase', type: DataTypes.DECIMAL(10, 2) },
  derechoCom: { field: 'derecho_com', type: DataTypes.DECIMAL(10, 2) },

  centralEjec: { field: 'central_ejec', type: DataTypes.DECIMAL(10, 2) },
  centralSup: { field: 'central_sup', type: DataTypes.DECIMAL(10, 2) },
  centralAse: { field: 'central_ase', type: DataTypes.DECIMAL(10, 2) },
  centralCom: { field: 'central_com', type: DataTypes.DECIMAL(10, 2) },

  izquierdoEjec: { field: 'izquierdo_ejec', type: DataTypes.DECIMAL(10, 2) },
  izquierdoSup: { field: 'izquierdo_sup', type: DataTypes.DECIMAL(10, 2) },
  izquierdoAse: { field: 'izquierdo_ase', type: DataTypes.DECIMAL(10, 2) },
  izquierdoCom: { field: 'izquierdo_com', type: DataTypes.DECIMAL(10, 2) },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.testGeneral, { as: 'testGeneral', foreignKey: 'idTest' });
    this.belongsTo(models.webUsuarios, { as: 'usuario', foreignKey: 'idWebUsuario' });
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
