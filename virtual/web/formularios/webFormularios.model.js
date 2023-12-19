'use strict';
const { Model, DataTypes } = require('sequelize');
const config = require('../../../../config');

const TABLE_NAME = 'web_formularios';
const MODEL_NAME = 'webFormularios';

const Schema = {
  idFormulario: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_formulario',
  },
  titulo: {
    type: DataTypes.STRING(150),
    allowNull: true,
    comment: 'Titulo personalizado del formulario',
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
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'fecha_fin',
  },
  camposOcultos: {
    type: DataTypes.STRING(255),
    allowNull: true,
    comment: 'id del html de los campos que se quieren ocultar en el formulario',
    field: 'campos_ocultos',
    get() {
      const camposOcultos = this.getDataValue('camposOcultos');
      return camposOcultos.split(',');
    },
  },
  password: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  codigo: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },
  headerRegistroExitoso: {
    type: DataTypes.STRING(250),
    allowNull: true,
    comment: 'Imagen de encabezado personalizado del mensaje de registro exitoso (email y registro)',
    field: 'header_registro_exitoso',
    get() {
      const imageLocation = this.getDataValue('headerRegistroExitoso');
      const hostImage = config.images.host;
      if (!imageLocation) {
        return null;
      }
      return `${hostImage}${imageLocation}`;
    },
  },
  headerConfirmacionCuenta: {
    type: DataTypes.STRING(250),
    allowNull: true,
    comment: 'Imagen de pie de pagina personalizado del mensaje de confirmacion de cuenta',
    field: 'header_confirmacion_cuenta',
    get() {
      const imageLocation = this.getDataValue('headerConfirmacionCuenta');
      const hostImage = config.images.host;
      if (!imageLocation) {
        return null;
      }
      return `${hostImage}${imageLocation}`;
    },
  },
  headerError: {
    type: DataTypes.STRING(250),
    allowNull: true,
    comment: 'Imagen de pie de pagina personalizado del mensaje de error',
    field: 'header_error',
    get() {
      const imageLocation = this.getDataValue('headerError');
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
    this.belongsTo(models.webEmpresas, { as: 'empresa', foreignKey: 'idEmpresa' });
    this.hasMany(models.webFormulariosSuscripciones, { as: 'formulariosSuscripciones', foreignKey: 'idFormulario' });
    this.belongsToMany(models.webSuscripciones, {
      through: { model: models.webFormulariosSuscripciones },
      as: 'suscripciones',
      foreignKey: 'idFormulario',
    });
    this.hasMany(models.webFormulariosAreas, { as: 'formulariosAreas', foreignKey: 'idFormulario' });
    this.belongsToMany(models.webEmpresasAreas, {
      through: { model: models.webFormulariosAreas },
      as: 'areas',
      foreignKey: 'idFormulario',
    });
    this.hasMany(models.webFormulariosRoles, { as: 'formulariosRoles', foreignKey: 'idFormulario' });
    this.belongsToMany(models.webEmpresasRoles, {
      through: { model: models.webFormulariosRoles },
      as: 'roles',
      foreignKey: 'idFormulario',
    });
    this.hasMany(models.webFormulariosCodigos, { as: 'codigos', foreignKey: 'idFormulario' });
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
