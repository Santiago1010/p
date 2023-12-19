'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');

const TABLE_NAME = 'web_cursos_progreso_usuarios_historial';
const MODEL_NAME = 'webCursosProgresoUsuariosHistorial';

const Schema = {
  idProgresoUsuarioHistorial: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_curso_progreso_historial',
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_usuarios',
      key: 'id_usuario',
    },
    field: 'id_usuario',
  },
  idCurso: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_cursos',
      key: 'id_curso',
    },
    field: 'id_curso',
  },
  idLeccion: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_cursos_modulos_lecciones',
      key: 'id_curso_modulo_leccion',
    },
    field: 'id_curso_modulo_leccion',
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  tiempo: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webUsuarios, { as: 'usuario', foreignKey: 'idUsuario' });
    this.belongsTo(models.webCursos, { as: 'curso', foreignKey: 'idCurso' });
    this.belongsTo(models.webCursosModulosLecciones, {
      as: 'leccion',
      foreignKey: 'idLeccion',
    });
    this.belongsToMany(models.webEmpresas, {
      through: { model: models.webCursosProgresoEmpresaUsuarios },
      as: 'empresas',
      foreignKey: 'idCursoProgresoUsuario',
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
