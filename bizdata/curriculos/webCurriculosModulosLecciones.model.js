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
