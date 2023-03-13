'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'usuarios_departamentos';
const MODEL_NAME = 'usuariosDepartamentos';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  idDepartamento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'departamentos',
      key: 'id',
    },
    field: 'id_departamento',
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id',
    },
    field: 'id_usuario',
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.departamentos, { as: 'departamento', foreignKey: 'idDepartamento' });
    this.belongsTo(models.usuarios, { as: 'usuario', foreignKey: 'idUsuario' });
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
