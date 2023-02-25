'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../../../../config');

const TABLE_NAME = 'web_planes_estudio';
const MODEL_NAME = 'webPlanesEstudio';

const Schema = {
  idPlanEstudio: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_plan_estudio',
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_usuarios',
      key: 'id_usuario',
    },
    field: 'id_usuario',
  },
  idEmpresa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_empresas',
      key: 'id_empresa',
    },
    field: 'id_empresa',
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  logo: {
    type: DataTypes.STRING(255),
    allowNull: true,
    get() {
      const imageLocation = this.getDataValue('logo');
      const hostImage = config.images.host;
      if (!imageLocation) {
        return null;
      }
      return `${hostImage}${imageLocation}`;
    },
  },
  color: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsToMany(models.webCursos, {
      through: { model: models.webPlanesEstudioCursos },
      as: 'cursos',
      foreignKey: 'idPlanEstudio',
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
