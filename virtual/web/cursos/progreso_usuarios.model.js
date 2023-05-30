'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_cursos_progreso_usuarios';
const MODEL_NAME = 'webCursosProgresoUsuarios';

const Schema = {
  idProgresoUsuario: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_curso_progreso_usuario',
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_usuarios',
      key: 'id_usuario',
    },
    field: 'id_usuario',
    unique: 'id_curso_modulo_leccion_id_usuario',
  },
  idCurso: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_cursos',
      key: 'id_curso',
    },
    field: 'id_curso',
  },
  idLeccion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_cursos_modulos_lecciones',
      key: 'id_curso_modulo_leccion',
    },
    field: 'id_curso_modulo_leccion',
    unique: 'id_curso_modulo_leccion_id_usuario',
  },
  tiempo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'En segundos',
  },
  estado: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
    comment: '0 =  Pendiente, 1 = Progreso, 2 =  Finalizado',
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  estadoString: {
    type: DataTypes.VIRTUAL,
    get() {
      const dicEstado = {
        0: 'Pendiente',
        1: 'Progreso',
        2: 'Finalizado',
      };
      const estado = this.getDataValue('estado');
      return dicEstado[estado] || 'Invalido';
    },
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.hasOne(models.webCursosProgresoEmpresaUsuarios, {
      as: 'progresoEmpresa',
      foreignKey: 'idCursoProgresoUsuario',
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
