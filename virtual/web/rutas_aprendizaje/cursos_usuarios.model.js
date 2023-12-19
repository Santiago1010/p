'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_rutas_aprendizaje_cursos_usuarios';
const MODEL_NAME = 'webRutasAprendizajeCursosUsuarios';

const Schema = {
  idRutaCursoUsuario: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_web_ruta_aprendizaje_curso_usuario',
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_usuarios',
      key: 'id_usuario',
    },
    field: 'id_web_usuario',
  },
  idCurso: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_cursos',
      key: 'id_curso',
    },
    field: 'id_web_curso',
  },
  estado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: '0 =  Pendiente, 1 = Progreso, 2 =  Finalizado, 3 = Aprobado',
    field: 'estado_curso',
  },
  estadoString: {
    type: DataTypes.VIRTUAL,
    get() {
      const dicEstado = {
        0: 'Pendiente',
        1: 'Progreso',
        2: 'Finalizado',
        3: 'Aprobado',
      };
      const estado = this.getDataValue('estado');
      return dicEstado[estado];
    },
  },
  fechaAprobado: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'fecha_aprobado',
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'updated_at',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webCursos, { as: 'curso', foreignKey: 'idCurso' });
    this.belongsTo(models.webUsuarios, { as: 'usuario', foreignKey: 'idUsuario' });
    this.hasMany(models.webRutasAprendizajeCursosEmpresaUsuarios, {
      as: 'cursoEmpresaUsuario',
      foreignKey: 'idRutaAprendizajeCursoUsuario',
    });
    this.belongsToMany(models.webEmpresas, {
      through: { model: models.webRutasAprendizajeCursosEmpresaUsuarios },
      as: 'empresas',
      foreignKey: 'idRutaAprendizajeCursoUsuario',
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
