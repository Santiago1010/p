'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_curriculos_progreso_grupo';
const MODEL_NAME = 'webCurriculosProgresoGrupo';

const Schema = {
  idProgresoGrupoCurriculo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_progreso_grupo_curriculo',
  },
  idCurriculo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_curriculos',
      key: 'id_curriculo',
    },
    field: 'id_curriculo',
  },
  idLeccionCurriculo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_curriculos_modulos_lecciones',
      key: 'id_leccion_curriculo',
    },
    field: 'id_leccion_curriculo',
    unique: 'web_curriculos_progreso_grupo_UN',
  },
  idSuscripcionCurriculoGrupo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '0 = Pendiente, 1 = Progreso, 2 = Terminado',
    references: {
      model: 'web_suscripciones_curriculos_grupos',
      key: 'id_suscripcion_curriculo_grupo',
    },
    field: 'id_suscripcion_curriculo_grupo',
    unique: 'web_curriculos_progreso_grupo_UN',
  },
  estado: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
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

  fecha: {
    type: DataTypes.DATE,
    allowNull: true,
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webCurriculos, { as: 'curriculo', foreignKey: 'idCurriculo' });
    this.belongsTo(models.webCurriculosModulosLecciones, {
      as: 'leccion',
      foreignKey: 'idLeccionCurriculo',
    });
    this.belongsTo(models.webSuscripcionesCurriculosGrupos, {
      as: 'curriculoGrupo',
      foreignKey: 'idSuscripcionCurriculoGrupo',
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
