'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../../../config');

const TABLE_NAME = 'web_curriculos_modulos_lecciones_materiales';
const MODEL_NAME = 'webCurriculosModulosLeccionesMateriales';

const Schema = {
  idMaterialLeccion: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_material_leccion',
  },
  idLeccionCurriculo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_curriculos_modulos_lecciones',
      key: 'id_leccion_curriculo',
    },
    field: 'id_leccion_curriculo',
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  tipo: {
    type: DataTypes.ENUM('video', 'imagen', 'documento'),
    allowNull: true,
  },
  url: {
    type: DataTypes.STRING(100),
    allowNull: true,
    get() {
      const tipoRecurso = this.getDataValue('tipo');
      const recurso = this.getDataValue('url');
      if (tipoRecurso == 'video') {
        return recurso;
      }
      const hostImage = config.images.host;
      if (!recurso) {
        return null;
      }
      return `${hostImage}${recurso}`;
    },
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
    this.belongsTo(models.webCurriculosModulosLecciones, { as: 'leccion', foreignKey: 'idLeccionCurriculo' });
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
