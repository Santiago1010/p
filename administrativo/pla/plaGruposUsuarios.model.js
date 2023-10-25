'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'pla_grupos_usuarios';
const MODEL_NAME = 'plaGruposUsuarios';

const Schema = {
  idGrupoUsuario: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_grupo_usuario',
  },
  idGrupo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pla_grupos',
      key: 'id_grupo',
    },
    field: 'id_grupo',
  },
  idEmpleado: {
    type: DataTypes.STRING(30),
    allowNull: false,
    references: {
      model: 'adm_empleados',
      key: 'codemp',
    },
    field: 'id_empleado',
  },
  idRol: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'pla_roles',
      key: 'id_rol',
    },
    field: 'id_rol',
  },
  idAnio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'config_anios',
      key: 'id',
    },
    field: 'id_anio',
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
    this.belongsTo(models.configAnios, { as: 'anio', foreignKey: 'idAnio' });
    this.belongsTo(models.admEmpleados, { as: 'empleado', foreignKey: 'idEmpleado' });
    this.belongsTo(models.plaGrupos, { as: 'grupo', foreignKey: 'idGrupo' });
    this.belongsTo(models.plaRoles, { as: 'rol', foreignKey: 'idRol' });
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
