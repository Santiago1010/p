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
  biografia: DataTypes.STRING(500),
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
  fNacimiento: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'f_nacimiento',
  },
  genero: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  website: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  pais: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'adm_paises',
      key: 'id',
    },
  },
  facebook: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  twitter: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  instagram: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  linkedin: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  password: {
    type: DataTypes.TEXT,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  deletedAt: {
    type: DataTypes.DATE,
    field: 'deleted_at',
    allowNull: true,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsToMany(models.webCursos, {
      through: { model: models.webCursosInstructores },
      as: 'cursos',
      foreignKey: 'idInstructor',
    });
    /*this.hasMany(models.webInstructoresEstudios, {
      foreignKey: 'id_instructor',
      as: 'estudios',
    });
    this.hasMany(models.webInstructoresExperiencias, {
      foreignKey: 'id_instructor',
      as: 'experiencias',
    });*/
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
