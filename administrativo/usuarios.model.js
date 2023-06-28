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
  nombre: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
  celular: {
    type: DataTypes.TEXT,
    allowNull: false,
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
      model: 'adm_empleados',
      key: 'codemp',
    },
  },
  activo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  idPerfil: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'usuarios_perfil',
      key: 'id',
    },
    field: 'id_perfil',
  },
  reproCitaAdmision: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    field: 'repro_cita_admision',
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
