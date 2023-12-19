'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_cursos_rating';
const MODEL_NAME = 'webCursosRating';

const Schema = {
  idCursoRaiting: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_curso_rating',
  },
  idCurso: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_cursos',
      key: 'id_curso',
    },
    field: 'id_curso',
    unique: 'web_cursos_raiting_usuario_curso_UN',
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_usuarios',
      key: 'id_usuario',
    },
    field: 'id_usuario',
    unique: 'web_cursos_raiting_usuario_curso_UN',
  },
  calificacion: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  recomendacion: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: true,
    comment: '0= NO, 1 = Si (Recomiendas este curso)',
  },
  observacion: {
    type: DataTypes.STRING(300),
    allowNull: true,
    comment: 'Cuéntale a todos qué es lo más TOP de este curso',
  },
  visible: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: true,
    defaultValue: 1,
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webUsuarios, { as: 'usuario', foreignKey: 'idUsuario' });
    this.belongsTo(models.webCursos, { as: 'curso', foreignKey: 'idCurso' });
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
