'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../../../config');

const TABLE_NAME = 'web_curriculos_modulos_lecciones';
const MODEL_NAME = 'webCurriculosModulosLecciones';

const Schema = {
  idLeccionCurriculo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_leccion_curriculo',
  },
  idModulo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_curriculos_modulos',
      key: 'id_modulo_curriculo',
    },
    field: 'id_modulo',
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  tipo: {
    type: DataTypes.ENUM('Documento', 'Video', 'Audio'),
    allowNull: true,
    get() {
      return this.getDataValue('tipo').toLowerCase();
    },
  },
  recurso: {
    type: DataTypes.STRING(300),
    allowNull: true,
    get() {
      const tipoRecurso = this.getDataValue('tipo');
      const recurso = this.getDataValue('recurso');
      if (tipoRecurso == 'Video') {
        return recurso;
      }
      const hostImage = config.images.host;
      if (!recurso) {
        return null;
      }
      return `${hostImage}${recurso}`;
    },
  },
  orden: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  estado: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: 1,
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
    this.belongsTo(models.webCurriculosModulos, {
      as: 'modulo',
      foreignKey: 'idModulo',
    });
    this.hasOne(models.webCurriculosProgresoGrupo, {
      as: 'progresoGrupo',
      foreignKey: 'idLeccionCurriculo',
    });
    this.hasMany(models.webCurriculosModulosLeccionesMateriales, {
      as: 'materiales',
      foreignKey: 'idLeccionCurriculo',
    });
    this.hasMany(models.webCurriculosModulosLeccionesPeriodos, { as: 'leccionesPeriodos', foreignKey: 'idLeccion' });
    this.belongsToMany(models.webSuscripcionesCurriculosPeriodos, {
      through: { model: models.webCurriculosModulosLeccionesPeriodos },
      as: 'periodos',
      foreignKey: 'idLeccion',
    });
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
