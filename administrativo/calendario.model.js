'use strict';
const { Model, DataTypes } = require('sequelize');

const TABLE_NAME = 'calendario';
const MODEL_NAME = 'Calendario';

const Schema = {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  fechaInicio: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'fecha_fin',
  },
  descripcion: {
    type: DataTypes.STRING(250),
    allowNull: false,
  },
  idCategoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'calendario_categorias',
      key: 'id',
    },
    field: 'id_categoria',
  },
  idDepartamento: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'departamentos',
      key: 'id',
    },
    field: 'id_departamento',
  },
  codesc: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  codsed: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'adm_sedes',
      key: 'codsed',
    },
  },
  idUsuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id',
    },
    field: 'id_usuario',
  },
  activo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
};
class ExtendedModel extends Model {
  static associate(models) {
    this.belongsTo(models.admSedes, { as: 'sede', foreignKey: 'codsed' });
    this.belongsTo(models.calendarioCategorias, { as: 'categoria', foreignKey: 'idCategoria' });
    this.belongsTo(models.departamentos, { as: 'departamento', foreignKey: 'idDepartamento' });
    this.belongsTo(models.usuarios, { as: 'usuario', foreignKey: 'idUsuario' });
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
