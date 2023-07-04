'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_certificados';
const MODEL_NAME = 'webCertificados';

const Schema = {
  idCertificado: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_certificado',
  },
  nombre: {
    type: DataTypes.STRING(200),
    allowNull: true,
    field: 'nombre_certificado',
  },
  paragrafo: {
    type: DataTypes.ENUM('Certifica a:', 'Otorga a:'),
    allowNull: true,
    field: 'paragrafo_certifcado',
  },
  contenido: {
    type: DataTypes.STRING(200),
    allowNull: true,
    field: 'contenido_certificado',
  },
  fondo: {
    type: DataTypes.STRING(150),
    allowNull: true,
    field: 'fondo_certificado',
  },
  colorFooter: {
    type: DataTypes.STRING(7),
    allowNull: true,
    field: 'color_footer',
  },
  tipo: {
    type: DataTypes.ENUM('cursos', 'programas', 'cursosEmpresa'),
    allowNull: false,
    defaultValue: 'cursos',
  },
  personalizado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment:
      'Si la plantilla de certifcado es personalizada o no, solo deberia haber maximo 1 certificado default por tipo',
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
    this.hasMany(models.webCursosCertificados, { as: 'cursosCertificados', foreignKey: 'idCertificado' });
    this.hasMany(models.webSuscripcionesCertificados, {
      as: 'suscripcionesCertificados',
      foreignKey: 'idCertificado',
    });
    this.belongsToMany(models.webCursos, {
      through: { model: models.webCursosCertificados },
      as: 'cursos',
      foreignKey: 'idCertificado',
    });
    this.belongsToMany(models.webSuscripciones, {
      through: { model: models.webSuscripcionesCertificados },
      as: 'suscripciones',
      foreignKey: 'idCertificado',
    });
    this.hasMany(models.webCertificadosFirmas, { as: 'firmas', foreignKey: 'idCertificado' });
    this.hasMany(models.webCertificadosLogos, { as: 'logos', foreignKey: 'idCertificado' });
    this.hasMany(models.webCertificadosPatrocinadores, {
      as: 'patrocinadores',
      foreignKey: 'idCertificado',
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
