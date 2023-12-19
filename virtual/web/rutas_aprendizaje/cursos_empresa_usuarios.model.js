'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_rutas_aprendizaje_cursos_empresa_usuarios';
const MODEL_NAME = 'webRutasAprendizajeCursosEmpresaUsuarios';

const Schema = {
  idCursosEmpresaUsuarios: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_cursos_empresa_usuarios',
  },
  idRutaAprendizajeCursoUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_rutas_aprendizaje_cursos_usuarios',
      key: 'id_web_ruta_aprendizaje_curso_usuario',
    },
    unique: 'web_rutas_aprendizaje_cursos_empresa_usuarios_FK',
    field: 'id_web_ruta_aprendizaje_curso_usuario',
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
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webRutasAprendizajeCursosUsuarios, {
      as: 'progresoCursoUsuario',
      foreignKey: 'idRutaAprendizajeCursoUsuario',
    });

    this.belongsTo(models.webEmpresas, { as: 'empresa', foreignKey: 'idEmpresa' });
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
