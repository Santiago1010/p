'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_formularios_codigos';
const MODEL_NAME = 'webFormulariosCodigos';

const Schema = {
  codigo: {
    type: DataTypes.CHAR(35),
    allowNull: false,
    primaryKey: true,
  },
  idFormulario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'web_formularios',
      key: 'id_formulario',
    },
    field: 'id_formulario',
    unique: 'codigo_formulario_usuario_UN',
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'web_usuarios',
      key: 'id_usuario',
    },
    field: 'id_usuario',
    unique: 'codigo_formulario_usuario_UN',
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
    this.belongsTo(models.webFormularios, { as: 'formulario', foreignKey: 'idFormulario' });
    this.belongsTo(models.webUsuarios, { as: 'usuario', foreignKey: 'idUsuario' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TABLE_NAME,
      modelName: MODEL_NAME,
      timestamps: true,
      paranoid: true,
      hooks: {
        beforeValidate: (record) => {
          record.dataValues.codigo = `${record.dataValues.idFormulario || ''}${generarCodigoAleatorio()}`;
        },
      },
    };
  }
}

function generarCodigoAleatorio() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let codigo = '';

  for (let i = 0; i <= 7; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    codigo += caracteres.charAt(indiceAleatorio);
  }

  return codigo;
}

module.exports = { Schema, ExtendedModel };
