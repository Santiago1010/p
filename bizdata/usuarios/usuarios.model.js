'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'biz_usuarios';
const MODEL_NAME = 'bizUsuarios';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  empresaId: { field: 'empresa_id', type: DataTypes.INTEGER },
  nombre: DataTypes.STRING,
  rol: DataTypes.INTEGER,
  fechaInicio: {
    field: 'fecha_inicio',
    type: DataTypes.DATE,
  },
  fechaFin: { field: 'fecha_fin', type: DataTypes.DATE },
  activo: DataTypes.INTEGER,
  licencias: DataTypes.INTEGER,
  email: DataTypes.STRING,
  celular: DataTypes.STRING,
  idFoto: {
    type: DataTypes.INTEGER,
    field: 'id_foto',
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
  estado: {
    type: DataTypes.VIRTUAL,
    get() {
      let deletedAt = this.getDataValue('deletedAt');
      return deletedAt ? 0 : 1;
    },
    set(value) {
      throw new Error('Estado es un campo virtual no se puede guardar');
    },
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    //asociations for sequelize
    this.hasOne(models.webImagenes, { as: 'foto', foreignKey: 'idImagen', sourceKey: 'idFoto' });
    this.belongsTo(models.webEmpresas, { as: 'empresa', foreignKey: 'empresaId' });
    this.belongsTo(models.bizRoles, { as: 'userRol', foreignKey: 'rol' });
    this.belongsToMany(models.bizOpciones, {
      through: { model: models.bizUsuariosOpciones },
      as: 'opciones',
      foreignKey: 'idUsuario',
    });
    this.hasMany(models.webSuscripcionesCurriculosDocentes, {
      as: 'docentesCurriculo',
      foreignKey: 'idUsuario',
    });
    this.hasMany(models.bizUsuariosAreas, { as: 'usuariosAreas', foreignKey: 'idUsuario' });
    this.belongsToMany(models.webEmpresasAreas, {
      through: { model: models.bizUsuariosAreas },
      as: 'areas',
      foreignKey: 'idUsuario',
    });
    this.belongsToMany(models.webSuscripcionesCurriculosGrupos, {
      through: { model: models.webSuscripcionesCurriculosDocentes },
      as: 'gruposDocente',
      foreignKey: 'idUsuario',
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
