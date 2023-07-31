'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'usuarios';
const MODEL_NAME = 'Usuarios';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  pass: {
    type: DataTypes.TEXT,
    allowNull: true,
    comment: 'Contraseña para entrar al sistema de administracion eds',
  },
  codemp: {
    type: DataTypes.STRING(15),
    allowNull: true,
    references: {
      model: 'admEmpleados',
      key: 'codemp',
    },
  },
  idPerfil: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'usuariosPerfil',
      key: 'id',
    },
    field: 'id_perfil',
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    allowNull: true,
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
    allowNull: true,
  },
  deletedAt: {
    field: 'deleted_at',
    type: DataTypes.DATE,
    allowNull: true,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.admEmpleados, { as: 'empleado', foreignKey: 'codemp' });
    this.hasMany(models.Calendario, { as: 'calendarios', foreignKey: 'idUsuario' });
    this.hasMany(models.usuariosDepartamentos, { as: 'usuarioDepartamentos', foreignKey: 'idUsuario' });
    this.belongsToMany(models.Departamentos, {
      through: { model: models.usuariosDepartamentos },
      as: 'departamentos',
      foreignKey: 'idUsuario',
    });
    this.hasMany(models.permisosApiOpcionesUsuarios, { as: 'permisos', foreignKey: 'idUsuario' });
    this.belongsToMany(models.permisosApiOpciones, {
      through: { model: models.permisosApiOpcionesUsuarios },
      as: 'permisosApiOpciones',
      foreignKey: 'idUsuario',
    });
    this.belongsTo(models.usuariosPerfil, { as: 'perfil', foreignKey: 'idPerfil' });
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
