'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('./../../../../config');

const TABLE_NAME = 'web_eventos_recursos';
const MODEL_NAME = 'webEventosRecursos';

const Schema = {
  idRecurso: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_evento_recurso',
  },
  idEvento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    references: {
      model: 'web_eventos',
      key: 'id_eventos',
    },
    field: 'id_evento',
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: true,
    field: 'nombre_recurso',
  },
  tipo: {
    type: DataTypes.ENUM('Documento', 'Video', 'Imagen', 'Audio', 'Link'),
    allowNull: true,
    field: 'tipo_recurso',
  },
  recurso: {
    type: DataTypes.STRING(150),
    allowNull: true,
    get() {
      const tipo = this.getDataValue('tipo');
      const imageLocation = this.getDataValue('recurso');
      if (tipo !== 'Imagen' && tipo !== 'Documento') {
        return `${imageLocation}`;
      }

      const hostImage = config.images.host;

      if (!imageLocation) {
        return null;
      }

      return `${hostImage}${imageLocation}`;
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
    this.belongsTo(models.webEventos, { as: 'evento', foreignKey: 'idEvento' });
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
