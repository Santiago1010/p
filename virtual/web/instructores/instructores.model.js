'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../../../../config');
const TABLE_NAME = 'web_instructores';
const MODEL_NAME = 'webInstructores';

const Schema = {
  idInstructor: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_instructor',
  },
  nombreCompleto: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'nombre_completo_instructor',
  },
  pNombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'p_nombre_instructor',
  },
  sNombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 's_nombre_instructor',
  },
  pApellido: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'p_apellido_instructor',
  },
  sApellido: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 's_apellido_instructor',
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'email_instructor',
  },
  celular: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'celular_instructor',
  },
  cargo: DataTypes.STRING(100),
  biografia: DataTypes.STRING(250),
  foto: {
    type: DataTypes.STRING(150),
    get() {
      const imageLocation = this.getDataValue('foto');
      const hostImage = config.images.host;
      if (!imageLocation) {
        return null;
      }
      return `${hostImage}${imageLocation}`;
    },
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsToMany(models.webCursos, {
      through: { model: models.webCursosInstructores },
      as: 'cursos',
      foreignKey: 'idInstructor',
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
