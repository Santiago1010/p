'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'departamentos';
const MODEL_NAME = 'Departamentos';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(80),
    allowNull: false,
    defaultValue: '',
  },
  activo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  pqr: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.hasMany(models.Calendario, { as: 'calendarios', foreignKey: 'idDepartamento' });
    this.hasMany(models.calendarioCategorias, { as: 'categoriasCalendario', foreignKey: 'idDepartamento' });
    this.hasMany(models.usuariosDepartamentos, { as: 'usuarioDepartamentos', foreignKey: 'idDepartamento' });
    this.belongsToMany(models.Usuarios, {
      through: { model: models.usuariosDepartamentos },
      as: 'usuarios',
      foreignKey: 'idDepartamento',
    });
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
