'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_suscripciones_curriculos_grupos';
const MODEL_NAME = 'webSuscripcionesCurriculosGrupos';

const Schema = {
  idSuscripcionCurriculoGrupo: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_suscripcion_curriculo_grupo',
  },
  idSuscripcionCurriculo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_suscripciones_curriculos',
      key: 'id_suscripcion_curriculo',
    },
    field: 'id_suscripcion_curriculo',
  },
  idGrupoCurriculo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_curriculos_grupos',
      key: 'id_grupo_curriculo',
    },
    field: 'id_grupo_curriculo',
  },
  idSuscripcionCurriculoCiclo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_suscripciones_curriculos_ciclos',
      key: 'id_suscripcion_curriculo_ciclo',
    },
    field: 'id_suscripcion_curriculo_ciclo',
  },
  nroMatriculados: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'nro_matriculados',
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.webCurriculosGrupos, {
      as: 'grupo',
      foreignKey: 'idGrupoCurriculo',
    });
    this.belongsTo(models.webSuscripcionesCurriculos, {
      as: 'suscripcionCurriculo',
      foreignKey: 'idSuscripcionCurriculo',
    });
    this.belongsTo(models.webSuscripcionesCurriculosCiclos, {
      as: 'ciclo',
      foreignKey: 'idSuscripcionCurriculoCiclo',
    });
    this.hasMany(models.webSuscripcionesCurriculosDocentes, {
      as: 'docentes',
      foreignKey: 'idSuscripcionCurriculoGrupo',
    });
    this.hasMany(models.webSuscripcionesCurriculosEstudiantes, {
      as: 'estudiantes',
      foreignKey: 'idSuscripcionCurriculoGrupo',
    });
    this.hasMany(models.webSuscripcionesCurriculosGruposCronograma, {
      as: 'cronogramas',
      foreignKey: 'idSuscripcionCurriculoGrupo',
    });

    this.hasMany(models.webCurriculosProgresoGrupo, {
      as: 'progresoGrupos',
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
