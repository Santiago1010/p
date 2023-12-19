'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'web_redes_sociales';
const MODEL_NAME = 'webRedesSociales';

const Schema = {
  idRed: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    field: 'id_red',
  },
  nombreRed: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'nombre_red',
  },
  iconRed: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'icon_red',
  },
  estado: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 1,
  },
  linkBase: {
    type: DataTypes.STRING(150),
    allowNull: true,
    field: 'link_base',
  },
};

class ExtendedModel extends Model {
  static associate(models) {
    this.belongsToMany(models.webUsuarios, {
      through: { model: models.webUsuariosRedes },
      as: 'usuarios',
      foreignKey: 'idRed',
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
