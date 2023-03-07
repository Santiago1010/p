'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_retos_progreso_usuarios';
const MODEL_NAME = 'webRetosProgresoUsuarios';

const Schema = {
  idRetoProgreso: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_reto_progreso',
  },
  idReto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_retos',
      key: 'id_reto',
    },
    field: 'id_reto',
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_usuarios',
      key: 'id_usuario',
    },
    field: 'id_usuario',
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
  fechaInicio: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'fecha_fin',
  },
  estado: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
    comment: '0: Pendiente, 1: Progreso, 2: finalizado',
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
    this.belongsTo(models.webRetos, { as: 'reto', foreignKey: 'idReto' });
    this.belongsTo(models.webUsuarios, { as: 'usuario', foreignKey: 'idUsuario' });
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
