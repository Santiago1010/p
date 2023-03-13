'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'calendario_categorias';
const MODEL_NAME = 'calendarioCategorias';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
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
  backgroundColor: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  borderColor: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  textColor: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  activo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.Calendario, { as: 'calendarios', foreignKey: 'idCategoria' });
    this.belongsTo(models.departamentos, { as: 'departamento', foreignKey: 'idDepartamento' });
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
